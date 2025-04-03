n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(846519),
    o = n(481060),
    s = n(293245),
    c = n(863969),
    u = n(563593),
    d = n(981631),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = (0, o.GSL)(c.Z),
    g = (0, o.GSL)(u.Z),
    m = new Set([d.TzF.PUSHING, d.TzF.PULLING]),
    b = Object.freeze({
        [d.TzF.DONE]: f,
        [d.TzF.PLANNING]: f,
        [d.TzF.PREPARING]: f,
        [d.TzF.PUSHING]: o.rG2,
        [d.TzF.PULLING]: o._8t,
        [d.TzF.CONFLICT]: f,
        [d.TzF.ERROR]: f
    });
class _ extends i.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState && this.props.cloudSyncState.type === d.TzF.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2000, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: e } = this.props;
        if (null != e && e.type === d.TzF.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2000;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === d.TzF.PUSHING || e.type === d.TzF.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case d.TzF.DONE:
                if (t) return p.NW.string(p.t.atpo0d);
                return p.NW.string(p.t.ZCw6zs);
            case d.TzF.CONFLICT:
            case d.TzF.ERROR:
                return p.NW.string(p.t.ZCw6zs);
            case d.TzF.PLANNING:
                return p.NW.string(p.t.ERQ0VF);
            case d.TzF.PREPARING:
                return p.NW.string(p.t.n5feu7);
            case d.TzF.PUSHING:
                return p.NW.string(p.t.oCBh0N);
            case d.TzF.PULLING:
                return p.NW.string(p.t.RTLNqK);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            i = null == e ? { type: d.TzF.DONE } : e,
            l = this.getIsRecentlySynced(),
            a = {};
        (m.has(i.type) || l) &&
            (a.gradientConfig = {
                id: t.id,
                startColor: 'rgba(199, 208, 240, 1)',
                stopColor: 'rgba(114, 137, 218, 1)',
                stop: this.getStop(i, l)
            });
        let s = l ? g : b[i.type];
        return (0, r.jsx)(o.ua7, {
            text: this.getTooltip(i, l),
            children: (e) =>
                (0, r.jsx)(
                    s,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    h(e, t, n[t]);
                                });
                        }
                        return e;
                    })({ className: n }, a, e)
                )
        });
    }
    constructor(...e) {
        super(...e), h(this, '_doneTimer', new a.V7());
    }
}
let E = l.ZP.connectStores([s.Z], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: s.Z.getState(t.id, t.branchId) };
})(_);
