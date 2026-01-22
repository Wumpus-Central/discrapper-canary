n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(451988),
    s = n(990078),
    o = n(397927),
    c = n(465797),
    u = n(186975),
    d = n(379103),
    p = n(652215),
    f = n(985018);
let h = (0, o.kHD)(u.A),
    A = (0, o.kHD)(d.A),
    g = new Set([p.VX0.PUSHING, p.VX0.PULLING]),
    m = Object.freeze({
        [p.VX0.DONE]: h,
        [p.VX0.PLANNING]: h,
        [p.VX0.PREPARING]: h,
        [p.VX0.PUSHING]: o.JMY,
        [p.VX0.PULLING]: o.s3U,
        [p.VX0.CONFLICT]: h,
        [p.VX0.ERROR]: h,
    });
class b extends i.PureComponent {
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === p.VX0.DONE &&
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
        if (null != e && e.type === p.VX0.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2e3;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === p.VX0.PUSHING || e.type === p.VX0.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case p.VX0.DONE:
                if (t) return f.intl.string(f.t.atpo0W);
                return f.intl.string(f.t.ZCw6zh);
            case p.VX0.CONFLICT:
            case p.VX0.ERROR:
                return f.intl.string(f.t.ZCw6zh);
            case p.VX0.PLANNING:
                return f.intl.string(f.t.ERQ0VA);
            case p.VX0.PREPARING:
                return f.intl.string(f.t.n5feu3);
            case p.VX0.PUSHING:
                return f.intl.string(f.t.oCBh0J);
            case p.VX0.PULLING:
                return f.intl.string(f.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            i =
                null == e
                    ? {
                          type: p.VX0.DONE,
                      }
                    : e,
            l = this.getIsRecentlySynced();
        (g.has(i.type) || l) && (t.id, this.getStop(i, l));
        let a = l ? A : m[i.type];
        return (0, r.jsx)(s.m, {
            text: this.getTooltip(i, l),
            children: (0, r.jsx)(a, {
                className: n,
            }),
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
            })(this, "_doneTimer", new a.Ep());
    }
}
let _ = l.Ay.connectStores([c.A], (e) => {
    let { libraryApplication: t } = e;
    return {
        cloudSyncState: c.A.getState(t.id, t.branchId),
    };
})(b);
