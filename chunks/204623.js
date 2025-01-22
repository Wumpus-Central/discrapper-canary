r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(525654),
    l = r.n(s),
    u = r(765053),
    c = r(442837),
    d = r(336317),
    f = r(481060),
    p = r(596454),
    h = r(406128),
    _ = r(451478),
    m = r(176354),
    g = r(63063),
    E = r(358085),
    v = r(998502),
    y = r(151851),
    b = r(981631),
    I = r(388032);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function S() {
    let e = window.require('electron').remote.getCurrentWindow();
    (v.ZP.minimize = () => e.minimize()),
        (v.ZP.maximize = () => {
            e.isMaximized() ? e.unmaximize() : e.maximize();
        }),
        (v.ZP.close = () => e.close());
}
let A = c.ZP.connectStores([_.Z], () => ({ focused: _.Z.isFocused() }))(y.Z);
class C extends o.PureComponent {
    getPlatform() {
        var e;
        let n = null === (e = l().os) || void 0 === e ? void 0 : e.family;
        return null != n && /^win/i.test(n) ? E.PlatformTypes.WINDOWS : null != n && /darwin|os x/i.test(n) ? E.PlatformTypes.OSX : E.PlatformTypes.LINUX;
    }
    componentDidMount() {
        S();
    }
    render() {
        let e = (0, a.jsx)('div', {
                children: (0, a.jsxs)('p', {
                    children: [
                        I.intl.string(I.t['4tRjHB']),
                        ' ',
                        (0, a.jsx)(p.Z, {
                            src: m.ZP.getURL(d.Z.convert.fromCodePoint('1f44c')),
                            emojiName: ':ok_hand:',
                            animated: !1
                        })
                    ]
                })
            }),
            n = (0, a.jsx)(f.Button, {
                size: f.ButtonSizes.LARGE,
                onClick: this.handleDownload,
                children: I.intl.string(I.t['1WjMbG'])
            });
        return (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsx)(u.ql, { children: (0, a.jsx)('html', { className: (0, f.getThemeClass)(b.BRd.DARK) }) }),
                (0, a.jsx)(A, { type: this.getPlatform() }),
                (0, a.jsx)(h.Z, {
                    title: I.intl.string(I.t['3h+n+/']),
                    note: e,
                    action: n
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleDownload', () => {
                window.open(this.getPlatform() === E.PlatformTypes.WINDOWS ? g.Z.getArticleURL(b.BhN.CORRUPT_INSTALLATION) : b.EYA.DOWNLOAD);
            });
    }
}
