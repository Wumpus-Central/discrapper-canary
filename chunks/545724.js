n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    d = n(239091),
    u = n(687683),
    h = n(721953);
let m = function (e) {
    let { index: t, children: r, user: m, channel: p, onClick: g, isFocused: _, isActive: f, onOtherHover: E, className: I } = e,
        [C, v] = l.useState(!1),
        [N, T] = l.useState(!1),
        S = () => {
            v(!0), !_ || f || N || null == E || E();
        },
        Z = () => {
            v(!1);
        },
        A = (e, t) => {
            null != t &&
                (T(!0),
                (0, d.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('18509')]).then(n.bind(n, 881351));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t
                            });
                    },
                    {
                        onClose: () => {
                            T(!1);
                        }
                    }
                ));
        };
    return (0, i.jsx)(o.mh, {
        id: p.id,
        children: (e) =>
            (0, i.jsx)(c.tEY, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(s.Z.div, {
                    className: a()(h.messageRequestItem, I, {
                        [h.active]: f || N,
                        [h.firstItem]: 0 === t
                    }),
                    onContextMenu: (e) => A(e, m),
                    onMouseEnter: S,
                    onMouseLeave: Z,
                    onClick: null != g ? g : void 0,
                    style: {
                        LIST_ROW_HEIGHT: u.WN,
                        opacity: 1
                    },
                    ...e,
                    children: r(C || f || N)
                })
            })
    });
};
