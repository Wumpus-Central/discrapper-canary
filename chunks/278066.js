n.d(t, { A: () => p, a: () => h });
var i,
    l = n(627968),
    a = n(64700),
    r = n(615300),
    s = n(311907),
    o = n(397927),
    d = n(544028),
    c = n(652215),
    u = n(985018),
    A = n(34275),
    h = (((i = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), i);
let _ = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, l.jsxs)(a.Fragment, {
                    children: [
                        (0, l.jsx)(o.SGT, { note: u.intl.string(u.t.Y4vMY8) }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: A.x6,
                            children: (0, l.jsx)(o.Button, {
                                variant: "primary",
                                text: u.intl.string(u.t.w5uwoI),
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
            renderContent: () => (0, l.jsx)(o.SGT, { note: u.intl.string(u.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, l.jsx)(o.SGT, { note: u.intl.string(u.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, l.jsxs)("div", {
                    className: A.y7,
                    children: [
                        (0, l.jsx)(o.SGT, { note: u.intl.string(u.t["aCYQ+P"]) }),
                        null != e &&
                            (0, l.jsx)(o.Button, {
                                variant: "secondary",
                                text: t ? u.intl.string(u.t.R40bU2) : u.intl.string(u.t.rXl8fj),
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
            renderContent: () => (0, l.jsx)(o.SGT, { note: u.intl.string(u.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, l.jsx)(o.SGT, { note: u.intl.string(u.t["7sW4h1"]) }),
        },
    }),
    m = (e) => {
        let { theme: t } = e,
            n = u.intl.string(u.t["oi+B4p"]);
        return (0, l.jsx)(o.ppr, { theme: t, children: (0, l.jsx)(o.SGT, { note: n }) });
    };
class g extends a.PureComponent {
    state = { opacity: new r.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), r.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        r.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            a = (function (e) {
                switch (e) {
                    case c.m3P.ADD_FRIEND:
                    case c.m3P.ALL:
                        return _.SECTION_ALL;
                    case c.m3P.ONLINE:
                        return _.SECTION_ONLINE;
                    case c.m3P.PENDING:
                        return _.SECTION_PENDING;
                    case c.m3P.SUGGESTIONS:
                        return _.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return _.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === c.m3P.ADD_FRIEND
            ? (0, l.jsx)(r.A.div, { className: A.VD, style: i, children: (0, l.jsx)(m, { theme: n }) })
            : (0, l.jsx)(r.A.div, {
                  className: A.VD,
                  style: i,
                  children: (0, l.jsx)(o.ppr, { theme: n, children: a.renderContent(t) }),
              });
    }
}
let p = s.Ay.connectStores([d.A], () => ({ theme: d.A.theme }), { forwardRef: !0 })(g);
