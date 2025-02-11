n.d(t, { Z: () => C }), n(47120);
var i,
    s = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(995295),
    o = n(374470),
    d = n(902704),
    c = n(846519),
    u = n(13245),
    h = n(808506),
    p = n(372679),
    g = n(671999),
    f = n(358085);
function m(e, t, n) {
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
let _ = {
        x: 0,
        y: 0
    },
    v = !1;
function x(e) {
    let { clientX: t, clientY: n } = e;
    (v = !0), (_.x = t), (_.y = n);
}
let S = new Map();
function Z(e, t) {
    if (null == t) S.delete(e), 0 === S.size && (window.removeEventListener('mousemove', x), (v = !1));
    else {
        let n = S.get(e);
        if (null != n && (0, d.Z)(n.zone, t.zone)) return;
        0 === S.size && window.addEventListener('mousemove', x), S.set(e, t);
    }
    if (f.isPlatformEmbedded) {
        if (h.Z.isFocusedPidOutOfProcess()) {
            let e = Array.from(S.values()).map((e) => {
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
            let e = (0, p.M)();
            if (null == e) return;
            e.broadcastCommand({
                message: 'set_click_zones',
                zones: Array.from(S.values()).map((e) => {
                    let { zone: t } = e;
                    return t;
                })
            }),
                (n = e),
                E ||
                    (n.setClickZoneCallback((e, t, n) => {
                        let i = S.get(e);
                        null != i && (v || ((_.x = t), (_.y = n)), i.instance.click());
                    }),
                    (E = !0));
        }
    }
}
let E = !1;
class C extends (i = s.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), Z(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return s.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, g.B)('click', _.x, _.y);
        (0, g.J)(e, _.x, _.y);
    }
    constructor(...e) {
        super(...e),
            m(this, 'zone', a().uniqueId('ClickArea')),
            m(this, 'interval', new c.Xp()),
            m(this, 'updateZone', () => {
                let e = (0, r.findDOMNode)(this);
                if ((0, o.k)(e)) {
                    let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
                    Z(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.floor(t),
                            top: Math.floor(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(s)
                        }
                    });
                }
            });
    }
}
m(C, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
