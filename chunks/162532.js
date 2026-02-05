"use strict";
n.d(t, { Y: () => d }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(113144),
    s = n.n(a),
    o = n(776231);
let l = /url\(['"](.*)['"]\)/,
    u = (e) => {
        if (null == e || "" === e || "none" === e) return null;
        let t = e.match(l);
        return null != t ? t[1] : e;
    };
function c(e) {
    return null == e || "" === e || "none" === e ? "none" : `url(${e})`;
}
function d(e) {
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
                a = null != i ? u(i.backgroundImage) : null;
            (null == a && a !== n) || this.cachedURLs.indexOf(a) >= 0
                ? this.setState({ loaded: !0, cached: a })
                : null != a && a !== n && !0 === r && this.setState({ loaded: !1 }, () => this.preloadURL(a));
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
                { loaded: i, cached: a } = this.state;
            return i || null == t || (t = { ...t, backgroundImage: c(a) }), (0, r.jsx)(e, { style: t, ...n });
        }
    }
    return s()(t, e), t;
}
