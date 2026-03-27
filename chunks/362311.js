n.d(e, { A: () => x, m: () => u });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(421380),
    s = n(397927),
    d = n(308528),
    c = n(198982),
    o = n(235986),
    m = n(915089),
    p = n(263063),
    C = n(808728),
    g = n(71393),
    _ = n(985018),
    L = n(359401);
function u(t) {
    let { createdGuildId: e, hasFooter: n = !0, onClose: u, onChannelPromptCompleted: x, isSlideReady: T } = t,
        [E, G] = a.useState(""),
        [I, b] = a.useState(null),
        [D, h] = a.useState(!1),
        A = (0, m.GV)(),
        U = (0, r.bG)([g.A], () => g.A.getGuild(e), [e]),
        y = a.useRef(null);
    a.useEffect(() => {
        T && y.current?.focus();
    }, [T]);
    let N = a.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == U)) return;
                h(!0), b(null);
                let e = C.Ay.getDefaultChannel(U.id);
                try {
                    let t = _.intl.formatToPlainString(_.t.V4lepJ, { topic: E });
                    await d.A.createTextChannel(U.id, E, e?.parent_id, t), x();
                } catch (t) {
                    b(new c.Wl(t));
                }
                h(!1);
            },
            [U, E, x],
        ),
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.i4jeWR),
                    onClick: N,
                    disabled: 0 === E.length,
                    loading: D,
                }),
                (0, i.jsx)(l.$n, {
                    "data-migration-pending": !0,
                    className: L.SZ,
                    look: l.$n.Looks.BLANK,
                    size: l.$n.Sizes.MIN,
                    onClick: x,
                    children: _.intl.string(_.t["5Wxrcd"]),
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.rQ0, {
                    "data-migration-pending": !0,
                    className: L.wx,
                    direction: o.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != U && (0, i.jsx)(p.Ay, { guild: U }),
                        (0, i.jsx)(s.Text, {
                            className: L.J5,
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: U?.name,
                        }),
                        (0, i.jsx)(s.Heading, {
                            className: L.DD,
                            variant: "heading-sm/semibold",
                            children: _.intl.string(_.t["8VRa7d"]),
                        }),
                        (0, i.jsx)(s.Text, {
                            className: L.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: _.intl.string(_.t["+855Pm"]),
                        }),
                        null != u && (0, i.jsx)(s.s_y, { "data-migration-pending": !0, className: L.b, onClick: u }),
                    ],
                }),
                (0, i.jsxs)(s.$mQ, {
                    "data-migration-pending": !0,
                    className: L.Q6,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: N,
                            children: (0, i.jsx)(s.ksK, {
                                label: _.intl.string(_.t.bY20tU),
                                error: I?.getFieldMessage("name"),
                                type: "text",
                                value: E,
                                id: A,
                                onChange: G,
                                placeholder: _.intl.string(_.t.xGOYA8),
                                inputRef: y,
                            }),
                        }),
                        null != I &&
                            0 === Object.keys(I.fields).length &&
                            (0, i.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                children: I.message,
                            }),
                    ],
                }),
                n && (0, i.jsx)(s.jlY, { "data-migration-pending": !0, children: j }),
            ],
        }),
        footer: j,
    };
}
function x(t) {
    let { content: e } = u(t);
    return e;
}
