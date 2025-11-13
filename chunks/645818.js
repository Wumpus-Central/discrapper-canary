n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(846519),
    s = n(28664),
    o = n(481060),
    c = n(293245),
    u = n(863969),
    d = n(563593),
    p = n(981631),
    f = n(388032);
let h = (0, o.GSL)(u.Z),
    g = (0, o.GSL)(d.Z),
    m = new Set([p.TzF.PUSHING, p.TzF.PULLING]),
    _ = Object.freeze({
        [p.TzF.DONE]: h,
        [p.TzF.PLANNING]: h,
        [p.TzF.PREPARING]: h,
        [p.TzF.PUSHING]: o.rG2,
        [p.TzF.PULLING]: o._8t,
        [p.TzF.CONFLICT]: h,
        [p.TzF.ERROR]: h,
    });
class b extends i.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === p.TzF.DONE &&
            null != this.props.cloudSyncState.timestamp &&
            (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) &&
            this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2000, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: e } = this.props;
        if (null != e && e.type === p.TzF.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2000;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === p.TzF.PUSHING || e.type === p.TzF.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case p.TzF.DONE:
                if (t) return f.intl.string(f.t.atpo0W);
                return f.intl.string(f.t.ZCw6zh);
            case p.TzF.CONFLICT:
            case p.TzF.ERROR:
                return f.intl.string(f.t.ZCw6zh);
            case p.TzF.PLANNING:
                return f.intl.string(f.t.ERQ0VA);
            case p.TzF.PREPARING:
                return f.intl.string(f.t.n5feu3);
            case p.TzF.PUSHING:
                return f.intl.string(f.t.oCBh0J);
            case p.TzF.PULLING:
                return f.intl.string(f.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            i = null == e ? { type: p.TzF.DONE } : e,
            l = this.getIsRecentlySynced();
        (m.has(i.type) || l) && (t.id, this.getStop(i, l));
        let a = l ? g : _[i.type];
        return (0, r.jsx)(s.u, {
            text: this.getTooltip(i, l),
            children: (0, r.jsx)(a, { className: n }),
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "_doneTimer", new a.V7());
    }
}
let E = l.ZP.connectStores([c.Z], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: c.Z.getState(t.id, t.branchId) };
})(b);
