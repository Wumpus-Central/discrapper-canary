"use strict";
function r() {
    return {
        num_failed: 0,
        num_delta_installed: 0,
        num_full_installed: 0,
        foreground_bytes_total: 0,
        background_bytes_total: 0,
        foreground_download_ms_total: 0,
        background_download_ms_total: 0,
        foreground_install_ms_total: 0,
        background_install_ms_total: 0,
    };
}
function i(e) {
    return "host" === e;
}
n.d(t, { A: () => s });
class s {
    _installingModules = {};
    _downloadingModules = {};
    _report;
    constructor() {
        this._report = r();
    }
    handleDownloadingModule(e) {
        if (!i(e.name)) {
            if (null != this._downloadingModules[e.name])
                return void console.warn("Duplicate downloading-module event for module ", e.name);
            this._downloadingModules[e.name] = { startTime: BigInt(e.now), foreground: e.foreground };
        }
    }
    _updateReportField(e, t, n) {
        let r = this._report[e];
        null != r ? (this._report[e] = n(r, t)) : (this._report[e] = t);
    }
    incrementReportField(e, t) {
        this._updateReportField(e, t, (e, t) => e + t);
    }
    setReportFieldMinimum(e, t) {
        this._updateReportField(e, t, Math.min);
    }
    setReportFieldMaximum(e, t) {
        this._updateReportField(e, t, Math.max);
    }
    handleDownloadedModule(e) {
        if (i(e.name)) return;
        let t = this._downloadingModules[e.name];
        if (null == t)
            return void console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
        let n = t.foreground ? "foreground" : "background",
            r = `${n}_download_ms_${e.name}`,
            s = `${n}_bytes_${e.name}`,
            a = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
            o = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        t.foreground
            ? ((this._report.foreground_download_ms_total += a), (this._report.foreground_bytes_total += o))
            : ((this._report.background_download_ms_total += a), (this._report.background_bytes_total += o)),
            this.incrementReportField(r, a),
            this.incrementReportField(s, o),
            delete this._downloadingModules[e.name];
    }
    handleInstallingModule(e) {
        if (!i(e.name)) {
            if (null != this._installingModules[e.name])
                return void console.warn("Duplicate installing-module event for module ", e.name);
            this._installingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground,
                oldVersion: e.oldVersion,
                newVersion: e.newVersion,
            };
        }
    }
    handleInstalledModule(e) {
        if (i(e.name)) return;
        let t = this._installingModules[e.name];
        if (null == t) return;
        let n = t.foreground ? "foreground" : "background",
            r = `${n}_install_ms_${e.name}`,
            s = `min_version_${e.name}`,
            a = `max_version_${e.name}`,
            o = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
        t.foreground
            ? (this._report.foreground_install_ms_total += o)
            : (this._report.background_install_ms_total += o),
            this.incrementReportField(r, o),
            this.setReportFieldMinimum(s, t.oldVersion),
            e.succeeded
                ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++,
                  this.setReportFieldMaximum(a, t.newVersion))
                : this._report.num_failed++,
            delete this._installingModules[e.name];
    }
    trackEvent(e) {
        switch (e.type) {
            case "installing-module":
                this.handleInstallingModule(e);
                break;
            case "installed-module":
                this.handleInstalledModule(e);
                break;
            case "downloading-module":
                this.handleDownloadingModule(e);
                break;
            case "downloaded-module":
                this.handleDownloadedModule(e);
        }
    }
    getStats() {
        return this._report;
    }
    reset() {
        this._report = r();
    }
    submissionReady() {
        return (
            this._report.num_full_installed +
                this._report.num_failed +
                this._report.num_delta_installed +
                this._report.foreground_bytes_total +
                this._report.background_bytes_total !==
                0 &&
            !(Object.keys(this._installingModules).length > 0) &&
            !(Object.keys(this._downloadingModules).length > 0)
        );
    }
}
