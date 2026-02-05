n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(451988),
    s = n(990078),
    o = n(397927),
    d = n(465797),
    c = n(186975),
    u = n(379103),
    A = n(652215),
    h = n(985018);
let _ = (0, o.kHD)(c.A),
    m = (0, o.kHD)(u.A),
    p = new Set([A.VX0.PUSHING, A.VX0.PULLING]),
    g = Object.freeze({
        [A.VX0.DONE]: _,
        [A.VX0.PLANNING]: _,
        [A.VX0.PREPARING]: _,
        [A.VX0.PUSHING]: o.JMY,
        [A.VX0.PULLING]: o.s3U,
        [A.VX0.CONFLICT]: _,
        [A.VX0.ERROR]: _,
    });
class E extends r.PureComponent {
    _doneTimer = new l.Ep();
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === A.VX0.DONE &&
            null != this.props.cloudSyncState.timestamp &&
            (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) &&
            this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2e3, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: e } = this.props;
        if (null != e && e.type === A.VX0.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2e3;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === A.VX0.PUSHING || e.type === A.VX0.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case A.VX0.DONE:
                if (t) return h.intl.string(h.t.atpo0W);
                return h.intl.string(h.t.ZCw6zh);
            case A.VX0.CONFLICT:
            case A.VX0.ERROR:
                return h.intl.string(h.t.ZCw6zh);
            case A.VX0.PLANNING:
                return h.intl.string(h.t.ERQ0VA);
            case A.VX0.PREPARING:
                return h.intl.string(h.t.n5feu3);
            case A.VX0.PUSHING:
                return h.intl.string(h.t.oCBh0J);
            case A.VX0.PULLING:
                return h.intl.string(h.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            r = null == e ? { type: A.VX0.DONE } : e,
            a = this.getIsRecentlySynced();
        (p.has(r.type) || a) && (t.id, this.getStop(r, a));
        let l = a ? m : g[r.type];
        return (0, i.jsx)(s.m, { text: this.getTooltip(r, a), children: (0, i.jsx)(l, { className: n }) });
    }
}
let f = a.Ay.connectStores([d.A], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: d.A.getState(t.id, t.branchId) };
})(E);
