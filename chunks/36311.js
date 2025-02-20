n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(986035),
    d = n(594174),
    p = n(63063),
    h = n(981631),
    f = n(388032),
    m = n(975743);
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
class b extends i.PureComponent {
    componentDidMount() {
        let { current: e } = this.scroller;
        null == e || e.scrollToBottom();
    }
    render() {
        let { nsfwDisallowed: e } = this.props,
            t = f.NW.string(f.t.peE8aW);
        t = e ? f.NW.format(f.t['2kHZen'], { helpURL: p.Z.getArticleURL(h.BhN.NSFW_AGE_GATING) }) : f.NW.string(f.t.E4Cd5O);
        let n = e
            ? (0, r.jsx)(u.Z, {
                  onAgree: this.handleAgree,
                  onDisagree: this.handleDisagree,
                  title: f.NW.string(f.t.NEabBQ),
                  description: t,
                  agreement: null,
                  disagreement: f.NW.string(f.t['13/7kZ']),
                  imageClassName: m.ageGatedImage
              })
            : (0, r.jsx)(u.Z, {
                  onAgree: this.handleAgree,
                  onDisagree: this.handleDisagree,
                  title: f.NW.string(f.t.ZmwvDQ),
                  description: t,
                  agreement: f.NW.string(f.t.wVq7ur),
                  disagreement: f.NW.string(f.t.hg1uxs)
              });
        return (0, r.jsx)(s.Den, {
            ref: this.scroller,
            className: m.scroller,
            children: (0, r.jsx)('div', {
                className: o()(this.props.className, m.wrapper),
                children: n
            })
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'scroller', i.createRef()),
            g(this, 'handleDisagree', () => {
                let { guild: e } = this.props;
                null != e && c.Z.nsfwReturnToSafety(e.id);
            }),
            g(this, 'handleAgree', () => {
                let { guild: e } = this.props;
                null != e && c.Z.nsfwAgree(e.id);
            });
    }
}
let _ = a.ZP.connectStores([d.default], () => {
    var e;
    return { nsfwDisallowed: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1 };
})(b);
