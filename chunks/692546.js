n.d(t, { Z: () => S }), n(47120);
var i,
    r = n(192379),
    s = n(392711),
    o = n.n(s),
    l = n(374470),
    a = n(902704),
    c = n(846519),
    u = n(13245),
    d = n(808506),
    h = n(372679),
    p = n(671999),
    f = n(358085);
function g(e, t, n) {
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
let m = {
        x: 0,
        y: 0
    },
    y = !1;
function O(e) {
    let { clientX: t, clientY: n } = e;
    (y = !0), (m.x = t), (m.y = n);
}
let v = new Map();
function x(e, t) {
    if (null == t) v.delete(e), 0 === v.size && (window.removeEventListener('mousemove', O), (y = !1));
    else {
        let n = v.get(e);
        if (null != n && (0, a.Z)(n.zone, t.zone)) return;
        0 === v.size && window.addEventListener('mousemove', O), v.set(e, t);
    }
    if (f.isPlatformEmbedded)
        if (d.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(v.values()).map((e) => {
                let { zone: t } = e;
                return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: (t.bottom / window.innerHeight) * 1.5
                };
            });
            u.Z.setClickZones(e);
        } else {
            var n;
            let e = (0, h.M)();
            if (null == e) return;
            e.broadcastCommand({
                message: 'set_click_zones',
                zones: Array.from(v.values()).map((e) => {
                    let { zone: t } = e;
                    return t;
                })
            }),
                (n = e),
                b ||
                    (n.setClickZoneCallback((e, t, n) => {
                        let i = v.get(e);
                        null != i && (y || ((m.x = t), (m.y = n)), i.instance.click());
                    }),
                    (b = !0));
        }
}
let b = !1;
class S extends (i = r.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), x(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return r.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, p.B)('click', m.x, m.y);
        (0, p.J)(e, m.x, m.y);
    }
    constructor(...e) {
        super(...e),
            g(this, 'zone', o().uniqueId('ClickArea')),
            g(this, 'interval', new c.Xp()),
            g(this, 'updateZone', () => {
                let e = this.props.contentDomRef.current;
                if ((0, l.k)(e)) {
                    let { left: t, top: n, right: i, bottom: r } = e.getBoundingClientRect();
                    x(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.floor(t),
                            top: Math.floor(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(r)
                        }
                    });
                }
            });
    }
}
g(S, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
