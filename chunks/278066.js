n.d(t, { A: () => N, a: () => h });
var i,
    s = n(627968),
    l = n(64700),
    a = n(615300),
    r = n(311907),
    o = n(396478),
    c = n(821609),
    d = n(544028),
    u = n(652215),
    m = n(985018),
    A = n(34275),
    h = (((i = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), i);
let x = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, s.jsxs)(l.Fragment, {
                    children: [
                        (0, s.jsx)(o.SG, { note: m.intl.string(m.t.Y4vMY8) }),
                        (0, s.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: A.x6,
                            children: (0, s.jsx)(c.$, {
                                variant: "primary",
                                text: m.intl.string(m.t.w5uwoI),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
        },
        SECTION_ONLINE: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, s.jsx)(o.SG, { note: m.intl.string(m.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, s.jsx)(o.SG, { note: m.intl.string(m.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, s.jsxs)("div", {
                    className: A.y7,
                    children: [
                        (0, s.jsx)(o.SG, { note: m.intl.string(m.t["aCYQ+P"]) }),
                        null != e &&
                            (0, s.jsx)(c.$, {
                                variant: "secondary",
                                text: t ? m.intl.string(m.t.R40bU2) : m.intl.string(m.t.rXl8fj),
                                onClick: e,
                                size: "sm",
                            }),
                    ],
                }),
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: () => (0, s.jsx)(o.SG, { note: m.intl.string(m.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, s.jsx)(o.SG, { note: m.intl.string(m.t["7sW4h1"]) }),
        },
    }),
    p = (e) => {
        let { theme: t } = e,
            n = m.intl.string(m.t["oi+B4p"]);
        return (0, s.jsx)(o.pp, { theme: t, children: (0, s.jsx)(o.SG, { note: n }) });
    };
class g extends l.PureComponent {
    state = { opacity: new a.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), a.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        a.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            l = (function (e) {
                switch (e) {
                    case u.m3P.ADD_FRIEND:
                    case u.m3P.ALL:
                        return x.SECTION_ALL;
                    case u.m3P.ONLINE:
                        return x.SECTION_ONLINE;
                    case u.m3P.PENDING:
                        return x.SECTION_PENDING;
                    case u.m3P.SUGGESTIONS:
                        return x.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return x.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === u.m3P.ADD_FRIEND
            ? (0, s.jsx)(a.A.div, { className: A.VD, style: i, children: (0, s.jsx)(p, { theme: n }) })
            : (0, s.jsx)(a.A.div, {
                  className: A.VD,
                  style: i,
                  children: (0, s.jsx)(o.pp, { theme: n, children: l.renderContent(t) }),
              });
    }
}
let N = r.Ay.connectStores([d.A], () => ({ theme: d.A.theme }), { forwardRef: !0 })(g);
