"use strict";
n.d(t, { Y: () => c }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(113144),
    a = n.n(s),
    o = n(776231);
let l = /url\(['"](.*)['"]\)/,
    u = (e) => {
        if (null == e || "" === e || "none" === e) return null;
        let t = e.match(l);
        return null != t ? t[1] : e;
    };
function c(e) {
    class t extends i.Component {
        cachedURLs = [];
        canceller = null;
        constructor(e) {
            super(e);
            const { style: t } = e,
                n = null != t ? u(t.backgroundImage) : null;
            (this.cachedURLs = [n]), (this.state = { cached: n, loaded: !0 });
        }
        componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: r } = this.state,
                { style: i } = this.props,
                s = null != i ? u(i.backgroundImage) : null;
            (null == s && s !== n) || this.cachedURLs.indexOf(s) >= 0
                ? this.setState({ loaded: !0, cached: s })
                : null != s && s !== n && !0 === r && this.setState({ loaded: !1 }, () => this.preloadURL(s));
        }
        preloadURL(e) {
            this.canceller?.(),
                (this.canceller = (0, o.yt)(e, (t) => {
                    (this.canceller = null), t || (this.cachedURLs.push(e), this.setState({ cached: e, loaded: !0 }));
                }));
        }
        componentWillUnmount() {
            this.canceller?.(), (this.cachedURLs.length = 0);
        }
        render() {
            let { style: t, ...n } = this.props,
                { loaded: i, cached: s } = this.state;
            return (
                i ||
                    null == t ||
                    (t = { ...t, backgroundImage: null == s || "" === s || "none" === s ? "none" : `url(${s})` }),
                (0, r.jsx)(e, { style: t, ...n })
            );
        }
    }
    return a()(t, e), t;
}
