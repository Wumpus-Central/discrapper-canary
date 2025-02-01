n.d(t, { Z: () => I }), n(47120);
var i,
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    o = n(995295),
    a = n(374470),
    d = n(902704),
    c = n(846519),
    u = n(13245),
    h = n(808506),
    p = n(671999),
    g = n(358085),
    f = n(998502);
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
let x = {
        x: 0,
        y: 0
    },
    v = !1;
function Z(e) {
    let { clientX: t, clientY: n } = e;
    (v = !0), (x.x = t), (x.y = n);
}
let S = new Map();
function E(e, t) {
    if (null == t) S.delete(e), 0 === S.size && (window.removeEventListener('mousemove', Z), (v = !1));
    else {
        let n = S.get(e);
        if (null != n && (0, d.Z)(n.zone, t.zone)) return;
        0 === S.size && window.addEventListener('mousemove', Z), S.set(e, t);
    }
    if (g.isPlatformEmbedded) {
        if (h.Z.isFocusedPidOutOfProcess())
            u.Z.setClickZones(
                Array.from(S.values()).map((e) => {
                    let { zone: t } = e;
                    return {
                        name: t.name,
                        left: t.left / window.innerWidth,
                        top: t.top / window.innerHeight,
                        right: t.right / window.innerWidth,
                        bottom: t.bottom / window.innerHeight
                    };
                })
            );
        else {
            var n;
            let e = f.ZP.requireModule('discord_overlay2');
            null === (n = e.broadcastCommand) ||
                void 0 === n ||
                n.call(e, {
                    message: 'set_click_zones',
                    zones: Array.from(S.values()).map((e) => {
                        let { zone: t } = e;
                        return t;
                    })
                }),
                C ||
                    (f.ZP.requireModule('discord_overlay2').setClickZoneCallback((e, t, n) => {
                        let i = S.get(e);
                        null != i && (v || ((x.x = t), (x.y = n)), i.instance.click());
                    }),
                    (C = !0));
        }
    }
}
let C = !1;
class I extends (i = s.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), E(this.zone, null);
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
        let e = (0, p.B)('click', x.x, x.y);
        (0, p.J)(e, x.x, x.y);
    }
    constructor(...e) {
        super(...e),
            m(this, 'zone', r().uniqueId('ClickArea')),
            m(this, 'interval', new c.Xp()),
            m(this, 'updateZone', () => {
                let e = (0, o.findDOMNode)(this);
                if ((0, a.k)(e)) {
                    let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
                    E(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.ceil(t),
                            top: Math.ceil(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(s)
                        }
                    });
                }
            });
    }
}
m(I, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
