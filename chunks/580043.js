"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(563495),
    o = n(397927),
    d = n(167669);
class c extends s.Component {
    render() {
        let { icon: e, ...t } = this.props;
        return (0, i.jsx)(e, { size: "md", ...t, color: "currentColor" });
    }
}
let u = (0, a.animated)(c),
    g = function (e) {
        let { className: t, name: n, icon: s, iconClassName: l } = e,
            a = (0, o.pnh)(
                { name: n, icon: s, iconClassName: l },
                {
                    key: (e) => e.name,
                    initial: null,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                },
                "animate-always",
            );
        return (0, i.jsx)("div", {
            className: r()(d.t, t),
            children: a((e, t) => {
                let { icon: n, iconClassName: s } = t;
                return (0, i.jsx)(u, { icon: n, className: r()(d.K, s), style: e });
            }),
        });
    };
