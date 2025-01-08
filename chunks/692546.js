n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i,
    s = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(995295),
    l = n(513431),
    d = n(902704),
    c = n(846519),
    u = n(13245),
    h = n(808506),
    p = n(671999),
    f = n(358085),
    g = n(998502);
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
let v = {
        x: 0,
        y: 0
    },
    x = !1;
function _(e) {
    let { clientX: t, clientY: n } = e;
    (x = !0), (v.x = t), (v.y = n);
}
let S = new Map();
function Z(e, t) {
    if (null == t) S.delete(e), 0 === S.size && (window.removeEventListener('mousemove', _), (x = !1));
    else {
        let n = S.get(e);
        if (null != n && (0, d.Z)(n.zone, t.zone)) return;
        0 === S.size && window.addEventListener('mousemove', _), S.set(e, t);
    }
    f.isPlatformEmbedded &&
        (h.Z.isFocusedPidOutOfProcess()
            ? u.Z.setClickZones(
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
              )
            : (g.ZP.requireModule('discord_overlay2').broadcastCommand({
                  message: 'set_click_zones',
                  zones: Array.from(S.values()).map((e) => {
                      let { zone: t } = e;
                      return t;
                  })
              }),
              (function () {
                  if (!E)
                      g.ZP.requireModule('discord_overlay2').setClickZoneCallback((e, t, n) => {
                          let i = S.get(e);
                          null != i && (!x && ((v.x = t), (v.y = n)), i.instance.click());
                      }),
                          (E = !0);
              })()));
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
        let e = (0, p.B)('click', v.x, v.y);
        (0, p.J)(e, v.x, v.y);
    }
    constructor(...e) {
        super(...e),
            m(this, 'zone', a().uniqueId('ClickArea')),
            m(this, 'interval', new c.Xp()),
            m(this, 'updateZone', () => {
                let e = (0, o.findDOMNode)(this);
                if ((0, l.k)(e)) {
                    let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
                    Z(this.zone, {
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
m(C, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
