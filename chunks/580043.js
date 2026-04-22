n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(866323),
    d = n(603254);
class c extends l.Component {
    render() {
        let { icon: e, ...t } = this.props;
        return (0, i.jsx)(e, { size: "md", ...t, color: "currentColor" });
    }
}
let u = (0, a.animated)(c),
    m = function (e) {
        let { className: t, name: n, icon: l, iconClassName: s } = e,
            a = (0, o.p)(
                { name: n, icon: l, iconClassName: s },
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
                let { icon: n, iconClassName: l } = t;
                return (0, i.jsx)(u, { icon: n, className: r()(d.K, l), style: e });
            }),
        });
    };
