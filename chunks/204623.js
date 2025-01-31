n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(525654),
    s = n.n(a),
    o = n(765053),
    l = n(442837),
    u = n(336317),
    c = n(481060),
    d = n(596454),
    f = n(406128),
    _ = n(451478),
    p = n(176354),
    h = n(63063),
    m = n(358085),
    g = n(998502),
    E = n(151851),
    v = n(981631),
    y = n(388032);
function I(e, t, n) {
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
function b() {
    let e = window.require('electron').remote.getCurrentWindow();
    (g.ZP.minimize = () => e.minimize()),
        (g.ZP.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (g.ZP.close = () => e.close());
}
let T = l.ZP.connectStores([_.Z], () => ({ focused: _.Z.isFocused() }))(E.Z);
class S extends r.PureComponent {
    getPlatform() {
        var e;
        let t = null === (e = s().os) || void 0 === e ? void 0 : e.family;
        return null != t && /^win/i.test(t) ? m.PlatformTypes.WINDOWS : null != t && /darwin|os x/i.test(t) ? m.PlatformTypes.OSX : m.PlatformTypes.LINUX;
    }
    componentDidMount() {
        b();
    }
    render() {
        let e = (0, i.jsx)('div', {
                children: (0, i.jsxs)('p', {
                    children: [
                        y.intl.string(y.t['4tRjHB']),
                        ' ',
                        (0, i.jsx)(d.Z, {
                            src: p.ZP.getURL(u.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }),
            t = (0, i.jsx)(c.zxk, {
                size: c.PhG.LARGE,
                onClick: this.handleDownload,
                children: y.intl.string(y.t['1WjMbG'])
            });
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.ql, { children: (0, i.jsx)('html', { className: (0, c.QeD)(v.BRd.DARK) }) }),
                (0, i.jsx)(T, { type: this.getPlatform() }),
                (0, i.jsx)(f.Z, {
                    title: y.intl.string(y.t['3h+n+/']),
                    note: e,
                    action: t
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleDownload', () => {
                window.open(this.getPlatform() === m.PlatformTypes.WINDOWS ? h.Z.getArticleURL(v.BhN.CORRUPT_INSTALLATION) : v.EYA.DOWNLOAD);
            });
    }
}
