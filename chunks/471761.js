"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(451988),
    a = n(990078),
    o = n(565787),
    c = n(95635),
    d = n(32880),
    h = n(465797),
    p = n(186975),
    u = n(379103),
    A = n(652215),
    m = n(985018);
let g = (0, o.k)(p.A),
    f = (0, o.k)(u.A),
    _ = new Set([A.VX0.PUSHING, A.VX0.PULLING]),
    x = Object.freeze({
        [A.VX0.DONE]: g,
        [A.VX0.PLANNING]: g,
        [A.VX0.PREPARING]: g,
        [A.VX0.PUSHING]: c.J,
        [A.VX0.PULLING]: d.s,
        [A.VX0.CONFLICT]: g,
        [A.VX0.ERROR]: g,
    });
class y extends s.PureComponent {
    _doneTimer = new r.Ep();
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
                if (t) return m.intl.string(m.t.atpo0W);
                return m.intl.string(m.t.ZCw6zh);
            case A.VX0.CONFLICT:
            case A.VX0.ERROR:
                return m.intl.string(m.t.ZCw6zh);
            case A.VX0.PLANNING:
                return m.intl.string(m.t.ERQ0VA);
            case A.VX0.PREPARING:
                return m.intl.string(m.t.n5feu3);
            case A.VX0.PUSHING:
                return m.intl.string(m.t.oCBh0J);
            case A.VX0.PULLING:
                return m.intl.string(m.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            s = null == e ? { type: A.VX0.DONE } : e,
            l = this.getIsRecentlySynced();
        (_.has(s.type) || l) && (t.id, this.getStop(s, l));
        let r = l ? f : x[s.type];
        return (0, i.jsx)(a.m, { text: this.getTooltip(s, l), children: (0, i.jsx)(r, { className: n }) });
    }
}
let N = l.Ay.connectStores([h.A], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: h.A.getState(t.id, t.branchId) };
})(y);
