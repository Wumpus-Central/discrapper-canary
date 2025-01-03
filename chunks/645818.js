n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(846519),
    s = n(481060),
    o = n(293245),
    c = n(863969),
    d = n(563593),
    u = n(981631),
    h = n(388032);
let m = (0, s.makeIconCompat)(c.Z),
    p = (0, s.makeIconCompat)(d.Z),
    g = new Set([u.TzF.PUSHING, u.TzF.PULLING]),
    f = Object.freeze({
        [u.TzF.DONE]: m,
        [u.TzF.PLANNING]: m,
        [u.TzF.PREPARING]: m,
        [u.TzF.PUSHING]: s.UploadIcon,
        [u.TzF.PULLING]: s.DownloadIcon,
        [u.TzF.CONFLICT]: m,
        [u.TzF.ERROR]: m
    });
class _ extends r.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState && this.props.cloudSyncState.type === u.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2000, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: e } = this.props;
        if (null != e && e.type === u.TzF.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2000;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === u.TzF.PUSHING || e.type === u.TzF.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case u.TzF.DONE:
                if (t) return h.intl.string(h.t.atpo0d);
                return h.intl.string(h.t.ZCw6zs);
            case u.TzF.CONFLICT:
            case u.TzF.ERROR:
                return h.intl.string(h.t.ZCw6zs);
            case u.TzF.PLANNING:
                return h.intl.string(h.t.ERQ0VF);
            case u.TzF.PREPARING:
                return h.intl.string(h.t.n5feu7);
            case u.TzF.PUSHING:
                return h.intl.string(h.t.oCBh0N);
            case u.TzF.PULLING:
                return h.intl.string(h.t.RTLNqK);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            r = null == e ? { type: u.TzF.DONE } : e,
            l = this.getIsRecentlySynced(),
            a = {};
        (g.has(r.type) || l) &&
            (a.gradientConfig = {
                id: t.id,
                startColor: 'rgba(199, 208, 240, 1)',
                stopColor: 'rgba(114, 137, 218, 1)',
                stop: this.getStop(r, l)
            });
        let o = l ? p : f[r.type];
        return (0, i.jsx)(s.Tooltip, {
            text: this.getTooltip(r, l),
            children: (e) =>
                (0, i.jsx)(o, {
                    className: n,
                    ...a,
                    ...e
                })
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = '_doneTimer'),
            (i = new a.V7()),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = l.ZP.connectStores([o.Z], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: o.Z.getState(t.id, t.branchId) };
})(_);
