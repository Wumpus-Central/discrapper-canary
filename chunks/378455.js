n.d(t, { default: () => G });
var l,
    i = n(477900),
    a = n(582128),
    r = n(837381),
    s = n(189213),
    o = n(765178),
    d = n(691540),
    u = n(857250),
    c = n(97483),
    g = n(506309),
    h = n(123292),
    f = n(834730),
    m = n(922016),
    x = n(939249),
    S = n(112173),
    p = n(778712),
    v = n(658675),
    b = n(308528),
    j = n(928039),
    C = n(47167),
    k = n(359378),
    y = n(598104),
    T = n(980707),
    E = n(477782);
n(321073), n(839272);
var P = n(309199),
    A = n(734057),
    O = n(573163),
    w = n(935208),
    D = (((l = {}).NEWEST = "newest"), (l.OLDEST = "oldest"), l);
function M(e, t) {
    return e.toSorted((e, n) => ("newest" === t ? n.lastActivity - e.lastActivity : e.lastActivity - n.lastActivity));
}
var z = n(282858),
    N = n(375708),
    H = n(443648);
function I(e) {
    let { sortOrder: t, onChangeSortOrder: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: H.k,
        children: (0, i.jsx)(T.W, {
            navId: "clean-up-gdms-sort",
            "aria-label": N.intl.string(z.default.yySzqH),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(E.rX, {
                children: [
                    (0, i.jsx)(E.iD, {
                        id: "clean-up-gdms-sort-newest",
                        group: "clean-up-gdms-sort",
                        label: N.intl.string(z.default.VHmOpK),
                        checked: t === D.NEWEST,
                        action: () => {
                            n(D.NEWEST), l();
                        },
                    }),
                    (0, i.jsx)(E.iD, {
                        id: "clean-up-gdms-sort-oldest",
                        group: "clean-up-gdms-sort",
                        label: N.intl.string(z.default.NLTGck),
                        checked: t === D.OLDEST,
                        action: () => {
                            n(D.OLDEST), l();
                        },
                    }),
                ],
            }),
        }),
    });
}
var L = n(373207);
let R = { height: 480 };
function G(e) {
    let { transitionState: t, onClose: n } = e,
        [l] = a.useState(() =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                    n = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 180,
                            t = new Date();
                        return t.setDate(t.getDate() - e), t.getTime();
                    })(t),
                    l = [];
                for (let e of Object.values(A.A.getMutablePrivateChannels())) {
                    let t = (function (e, t) {
                        if (!e.isGroupDM() || (0, P.k_)(e.id)) return null;
                        let n = (function (e, t) {
                            let n = O.Ay.lastMessageTimestamp(e);
                            if (n > 0) return n;
                            let l = O.Ay.lastMessageId(e) ?? t ?? e;
                            return w.default.extractTimestamp(l);
                        })(e.id, e.lastMessageId);
                        return n < t ? n : null;
                    })(e, n);
                    null != t && l.push({ channel: e, lastActivity: t });
                }
                return M(l, "oldest").slice(0, e);
            })(),
        ),
        [f, m] = a.useState(D.OLDEST),
        [x, S] = a.useState(() => new Set(l.slice(0, 1e3).map((e) => e.channel.id))),
        [p, v] = a.useState(!1),
        C = a.useMemo(() => M(l, f), [l, f]),
        k = 0 === l.length,
        y = x.size,
        T = Math.min(l.length, 1e3),
        E = l.length <= 1e3,
        H = T > 0 && y >= T,
        I = y >= 1e3,
        G = a.useCallback(
            (e, t) => {
                let n = !x.has(e);
                if (!n || !(x.size >= 1e3)) {
                    if (null != t) {
                        let e = n ? z.default["SsUZo/"] : z.default.x03WqE;
                        o.O.announce(N.intl.formatToPlainString(e, { name: t, count: n ? y + 1 : y - 1 }), "polite");
                    }
                    S((t) => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.size < 1e3 && n.add(e), n;
                    });
                }
            },
            [x, y],
        ),
        U = a.useCallback(() => {
            let e = y >= T,
                t = e ? 0 : T;
            o.O.announce(
                e ? N.intl.string(z.default.hhQnsH) : N.intl.formatToPlainString(z.default.GpUOWb, { count: t }),
                "polite",
            ),
                S((e) => (e.size >= T ? new Set() : new Set(C.slice(0, 1e3).map((e) => e.channel.id))));
        }, [C, T, y]),
        B = a.useCallback(
            async (e) => {
                try {
                    await b.A.bulkLeaveGroupDMs(e);
                } catch (t) {
                    let e;
                    if ((v(!1), t?.status === 409)) e = N.intl.string(z.default.ojlzko);
                    else if (t?.status === 429) {
                        let n = t.body?.retry_after;
                        e =
                            "number" == typeof n && Number.isFinite(n) && n > 0
                                ? N.intl.formatToPlainString(z.default.SHTZTm, { seconds: Math.ceil(n) })
                                : N.intl.string(z.default.f5Xg0V);
                    } else e = N.intl.string(z.default["+HM0x2"]);
                    (0, d.P0)((0, u.o)(e, c.Ck.FAILURE));
                    return;
                }
                (0, d.P0)((0, u.o)(N.intl.formatToPlainString(z.default.b2r81u, { count: e.length }), c.Ck.SUCCESS)),
                    n().catch(() => {});
            },
            [n],
        ),
        K = a.useCallback(() => {
            let e = Array.from(x);
            0 !== e.length && (v(!0), B(e));
        }, [x, B]),
        q = 0 === y ? N.intl.string(z.default.YBjUwi) : N.intl.formatToPlainString(z.default.SakG2D, { count: y }),
        V = (0, g.W)(16),
        Y = a.useRef(null),
        Z = (0, j.A)("clean-up-inactive-gdms-modal", Y),
        Q = a.useMemo(
            () => ({
                sections: [C.length],
                sectionHeight: 0,
                rowHeight: 48,
                paddingBottom: V,
                style: R,
                renderRow: (e) => {
                    let { row: t } = e,
                        n = C[t];
                    if (null == n) return null;
                    let l = x.has(n.channel.id);
                    return (0, i.jsx)(
                        F,
                        {
                            gdm: n,
                            selected: l,
                            disabled: I && !l,
                            onToggle: G,
                            ariaSetSize: C.length,
                            ariaPosInSet: t + 1,
                        },
                        n.channel.id,
                    );
                },
            }),
            [C, x, I, G, V],
        );
    return (0, i.jsx)(r.hD, {
        navigator: Z,
        children: (0, i.jsx)(r.PR, {
            children: (e) => {
                let { ref: l, ...a } = e;
                return (0, i.jsx)(s.Modal, {
                    transitionState: t,
                    onClose: n,
                    title: N.intl.string(z.default.FrCK4r),
                    subtitle: N.intl.string(z.default["2Cgdhl"]),
                    input: k
                        ? void 0
                        : (0, i.jsxs)("div", {
                              className: L.HO,
                              children: [
                                  (0, i.jsx)(_, { sortOrder: f, onChangeSortOrder: m }),
                                  (0, i.jsx)(h.Q, {
                                      variant: "primary",
                                      textVariant: "text-sm/medium",
                                      onClick: U,
                                      text: H
                                          ? N.intl.string(z.default.jxi9GF)
                                          : E
                                            ? N.intl.string(z.default.mKxGpP)
                                            : N.intl.formatToPlainString(z.default["9oRyjg"], { count: 1e3 }),
                                  }),
                              ],
                          }),
                    listProps: k
                        ? void 0
                        : {
                              ...Q,
                              ...a,
                              innerRole: void 0,
                              ref: (e) => {
                                  (Y.current = e), (l.current = e?.getScrollerNode() ?? null);
                              },
                          },
                    actions: k
                        ? [
                              {
                                  variant: "secondary",
                                  text: N.intl.string(N.t["ETE/oC"]),
                                  onClick: () => {
                                      n();
                                  },
                              },
                          ]
                        : [{ variant: "critical-primary", text: q, onClick: K, disabled: 0 === y, loading: p }],
                    children: k ? (0, i.jsx)(W, {}) : void 0,
                });
            },
        }),
    });
}
function W() {
    return (0, i.jsxs)("div", {
        className: L.p$,
        style: R,
        children: [
            (0, i.jsx)(f.E, { variant: "text-md/medium", children: N.intl.string(z.default.s8TEkh) }),
            (0, i.jsx)(f.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: N.intl.string(z.default["Y//IPC"]),
            }),
        ],
    });
}
function _(e) {
    let { sortOrder: t, onChangeSortOrder: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(m.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(I, { sortOrder: t, onChangeSortOrder: n, closePopout: l });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, i.jsxs)(x.D, {
                innerRef: l,
                className: L.$O,
                onClick: n,
                "aria-label": N.intl.string(z.default.yySzqH),
                "aria-expanded": a,
                children: [
                    (0, i.jsx)(f.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: N.intl.string(z.default["FLgBG/"]),
                    }),
                    (0, i.jsx)(S.J, { size: "xxs", color: "currentColor" }),
                ],
            });
        },
    });
}
function F(e) {
    let { gdm: t, selected: n, disabled: l, onToggle: a, ariaSetSize: r, ariaPosInSet: s } = e,
        o = (0, C.Ay)(t.channel) ?? void 0,
        d = t.channel.recipients.length + 1;
    return (0, i.jsx)(k.A, {
        listItemId: t.channel.id,
        icon: (0, i.jsx)(y.A, { "aria-hidden": !0, size: p._3.SIZE_32, channel: t.channel }),
        label: o,
        subLabel: N.intl.formatToPlainString(N.t.ABMKx3, { members: d }),
        selected: n,
        disabled: l,
        trailing: (0, i.jsx)(v.P, { checked: n, disabled: l }),
        onPress: () => a(t.channel.id, o),
        "aria-label": o,
        "aria-setsize": r,
        "aria-posinset": s,
    });
}
