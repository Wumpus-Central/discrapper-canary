(n.d(t, { Z: () => S }), n(35282), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(525654),
    o = n.n(a),
    s = n(446431),
    l = n(442837),
    c = n(336317),
    u = n(755721),
    d = n(481060),
    f = n(596454),
    _ = n(406128),
    p = n(451478),
    h = n(176354),
    m = n(63063),
    g = n(358085),
    E = n(998502),
    b = n(151851),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
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
function I() {
    let e = window.require('electron').remote.getCurrentWindow();
    ((E.ZP.minimize = () => e.minimize()),
        (E.ZP.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (E.ZP.close = () => e.close()));
}
let T = l.ZP.connectStores([p.Z], () => ({ focused: p.Z.isFocused() }))(b.Z);
class S extends i.PureComponent {
    getPlatform() {
        var e;
        let t = null == (e = o().os) ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? g.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? g.PlatformTypes.OSX : g.PlatformTypes.LINUX;
    }
    componentDidMount() {
        I();
    }
    render() {
        let e = (0, r.jsx)('div', {
                children: (0, r.jsxs)('p', {
                    children: [
                        O.intl.string(O.t['4tRjHB']),
                        ' ',
                        (0, r.jsx)(f.Z, {
                            src: h.ZP.getURL(c.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }),
            t = (0, r.jsx)(u.zx, {
                size: u.Ph.LARGE,
                onClick: this.handleDownload,
                children: O.intl.string(O.t['1WjMbG'])
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(s.ql, { children: (0, r.jsx)('html', { className: (0, d.QeD)(y.BRd.DARK) }) }),
                (0, r.jsx)(T, { type: this.getPlatform() }),
                (0, r.jsx)(_.Z, {
                    title: O.intl.string(O.t['3h+n+/']),
                    note: e,
                    action: t
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            v(this, 'handleDownload', () => {
                window.open(this.getPlatform() === g.PlatformTypes.WINDOWS ? m.Z.getArticleURL(y.BhN.CORRUPT_INSTALLATION) : y.EYA.DOWNLOAD);
            }));
    }
}
