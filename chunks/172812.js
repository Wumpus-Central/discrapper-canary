n.d(t, { default: () => D });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(238136),
    c = n(311907),
    d = n(663803),
    u = n(397927),
    o = n(155718),
    m = n(207963),
    _ = n(322980),
    h = n(544101),
    p = n(729292),
    x = n(554311),
    g = n(961350),
    N = n(734057),
    I = n(808728),
    f = n(71393),
    v = n(383501),
    E = n(309010),
    C = n(977997),
    S = n(161256),
    j = n(659416),
    A = n(276976),
    b = n(872884),
    y = n(45480),
    L = n(196959),
    T = n(652215),
    w = n(926966),
    O = n(985018),
    M = n(359718);
let G = { [j.sb.MILD]: "\uD83C\uDF36️", [j.sb.SPICY]: "\uD83D\uDD25", [j.sb.UNHINGED]: "\uD83D\uDC80" };
function D(e) {
    var t, n;
    let { transitionState: i, onClose: D, targetUser: R, channel: k, guildId: P, kind: H } = e,
        U = a.useId(),
        [q, V] = a.useState(""),
        [z, Y] = a.useState(5),
        [B, Q] = a.useState(1),
        [Z, X] = a.useState(
            (function (e) {
                switch (e) {
                    case j.sb.MILD:
                        return j.sb.MILD;
                    case j.sb.SPICY:
                    case j.sb.UNHINGED:
                        return j.sb.SPICY;
                }
            })(j.sb.UNHINGED),
        ),
        K = (0, x.tX)(),
        [W, $] = a.useState(K),
        J = (function (e) {
            switch (e) {
                case j.sb.MILD:
                    return [j.sb.MILD];
                case j.sb.SPICY:
                    return [j.sb.MILD, j.sb.SPICY];
                case j.sb.UNHINGED:
                    return [j.sb.MILD, j.sb.SPICY, j.sb.UNHINGED];
            }
        })(j.sb.UNHINGED),
        F = (0, A.k1)(H),
        ee = H === j.H9.VOCAL || H === j.H9.STREAM || H === j.H9.VIDEO,
        et = a.useMemo(() => `voice-dare-create:${P}:${R.id}:${H}:${U}`, [P, R.id, H, U]),
        en = "voice-dare-create-channel-select",
        el = (0, c.bG)([N.A, I.Ay, f.A, v.A, E.A, C.A], () => (0, b.w)(P, k, [N.A, I.Ay, f.A, v.A, E.A, C.A]), [P, k]),
        ea = (0, c.bG)([I.Ay], () => I.Ay.getDefaultChannel(P, !0)?.id ?? null, [P]),
        ei = a.useMemo(() => {
            let e = el?.id;
            return {
                type: o.I5.CHANNEL_SELECT,
                id: en,
                customId: "voice-dare-channel-select",
                placeholder: O.intl.string(w.default.CY5oYV),
                minValues: 1,
                maxValues: 1,
                required: !0,
                channelTypes: [T.rbe.GUILD_VOICE, T.rbe.GUILD_STAGE_VOICE],
                defaultValues: null != e ? [{ type: r.i.CHANNEL, id: e }] : void 0,
            };
        }, [en, el?.id]),
        es = (0, c.bG)([_.A], () => {
            let e = _.A.getInteractionComponentState(et, en);
            return e?.type !== o.I5.CHANNEL_SELECT ? null : (e.selectedOptions?.[0]?.value ?? null);
        }, [en, et]),
        er = ee ? (es ?? el?.id ?? null) : (el?.id ?? null),
        ec = 0 === q.trim().length || null == er,
        ed = R.globalName ?? R.username;
    return (0, l.jsxs)(u.EOs, {
        transitionState: i,
        "aria-labelledby": U,
        parentComponent: "CreateDareModal",
        children: [
            (0, l.jsxs)(u.rQ0, {
                separator: !1,
                children: [
                    (0, l.jsx)(u.Heading, {
                        id: U,
                        variant: "heading-lg/semibold",
                        children: O.intl.formatToPlainString(w.default.ayHpnN, { username: ed }),
                    }),
                    (0, l.jsx)(u.s_y, { onClick: D }),
                ],
            }),
            (0, l.jsx)(u.$mQ, {
                children: (0, l.jsxs)("div", {
                    className: M.jE,
                    children: [
                        (0, l.jsxs)("div", {
                            className: M.wx,
                            children: [
                                (0, l.jsx)(u.euF, {
                                    src: R.getAvatarURL(P, 64),
                                    size: u._3J.SIZE_44,
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)("div", {
                                    className: M.Se,
                                    children: [
                                        (0, l.jsx)(u.Text, {
                                            variant: "text-lg/semibold",
                                            className: M.je,
                                            children: ed,
                                        }),
                                        (0, l.jsx)(u.Text, {
                                            variant: "text-sm/normal",
                                            className: M.VA,
                                            children: O.intl.string(w.default.hWyZGi),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: M.s,
                            children: [
                                (0, l.jsx)(u.Text, { variant: "eyebrow", children: O.intl.string(w.default.pIea6d) }),
                                (0, l.jsxs)("div", {
                                    className: M.Kt,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: M.Qs,
                                            children: (0, y.au)(H, { size: "md", color: "currentColor" }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: M.PQ,
                                            children: [
                                                (0, l.jsx)(u.Text, {
                                                    variant: "text-md/semibold",
                                                    className: M.tf,
                                                    children: O.intl.string((0, L.Tw)(H)),
                                                }),
                                                (0, l.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    className: M.ne,
                                                    children: F.explanationText,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: M.gy,
                            children: [
                                ee &&
                                    (0, l.jsx)(u.eIh, {
                                        title: O.intl.string(w.default["2RiQiL"]),
                                        children: (0, l.jsx)(m.f5, {
                                            modal: { customId: et, channelId: ea ?? el?.id ?? k?.id, components: [ei] },
                                            children: (0, l.jsx)(h.A, { ...ei }),
                                        }),
                                    }),
                                H === j.H9.GAME &&
                                    (0, l.jsx)(u.eIh, {
                                        title: O.intl.string(w.default.YbmPxR),
                                        children: (0, l.jsx)(p.A, {
                                            selectedGame: W,
                                            setSelectedGame: $,
                                            placeholder: O.intl.string(w.default.DXY9Ua),
                                        }),
                                    }),
                                (0, l.jsx)(u.eIh, {
                                    title: O.intl.string(w.default.wctTt5),
                                    children: (0, l.jsx)(u.fs1, {
                                        value: q,
                                        placeholder: O.intl.string((0, L.YP)(H)),
                                        onChange: (e) => V(e),
                                        rows: 3,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: M.IM,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: M.h8,
                                            children: (0, l.jsx)(u.eIh, {
                                                title: O.intl.string(w.default.YTHgyR),
                                                children: (0, l.jsxs)("div", {
                                                    className: M.mW,
                                                    children: [
                                                        (0, l.jsx)(d.l, {
                                                            value: z,
                                                            onChange: Y,
                                                            minValue: 1,
                                                            maxValue: 60,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            variant: "text-sm/normal",
                                                            className: M.Tq,
                                                            children: O.intl.string(w.default.XZe1HS),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: M.h8,
                                            children: (0, l.jsx)(u.eIh, {
                                                title: O.intl.string(w.default.wV1TJy),
                                                children: (0, l.jsxs)("div", {
                                                    className: M.mW,
                                                    children: [
                                                        (0, l.jsx)(d.l, {
                                                            value: B,
                                                            onChange: Q,
                                                            minValue: 1,
                                                            maxValue: 24,
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            variant: "text-sm/normal",
                                                            className: M.Tq,
                                                            children: O.intl.string(w.default.X87wPa),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, l.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            className: M.Iy,
                                            children: O.intl.formatToPlainString(w.default.NvsYaZ, {
                                                durationMinutesText:
                                                    1 === (t = z)
                                                        ? O.intl.formatToPlainString(w.default["DiI+eX"], { count: 1 })
                                                        : O.intl.formatToPlainString(w.default.mSDut9, { count: t }),
                                                failAfterHoursText:
                                                    1 === (n = B)
                                                        ? O.intl.formatToPlainString(w.default.Jp2EGO, { count: 1 })
                                                        : O.intl.formatToPlainString(w.default.lnUmY4, { count: n }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: M.zp,
                            children: [
                                (0, l.jsx)(u.Text, { variant: "eyebrow", children: O.intl.string(w.default.JNGkzi) }),
                                (0, l.jsx)("div", {
                                    className: M.xL,
                                    children: J.map((e) =>
                                        (0, l.jsxs)(
                                            u.DUT,
                                            {
                                                className: s()(M.iJ, { [M.p5]: Z === e }),
                                                onClick: () => X(e),
                                                children: [
                                                    (0, l.jsx)("span", { className: M.q8, children: G[e] }),
                                                    (0, l.jsx)(u.Text, {
                                                        variant: "text-sm/medium",
                                                        className: M.wX,
                                                        children: O.intl.string((0, L.Uf)(e)),
                                                    }),
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                                (0, l.jsxs)("div", {
                                    className: M.qq,
                                    children: [
                                        (0, l.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            className: M.g9,
                                            children: O.intl.string(w.default.sR2Pip),
                                        }),
                                        (0, l.jsx)(u.Text, {
                                            variant: "text-sm/normal",
                                            className: M.CK,
                                            children: O.intl.string((0, L.w6)(Z)),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(u.jlY, {
                children: (0, l.jsxs)("div", {
                    className: M.qr,
                    children: [
                        (0, l.jsx)(u.Button, {
                            variant: "secondary",
                            text: O.intl.string(w.default["9/SaAs"]),
                            onClick: D,
                        }),
                        (0, l.jsx)(u.Button, {
                            variant: "primary",
                            text: O.intl.string(w.default.ptt1KM),
                            onClick: () => {
                                let e = g.default.getId();
                                null == e ||
                                    (null != er &&
                                        ((0, S.tZ)({
                                            guildId: P,
                                            channelId: er,
                                            senderId: e,
                                            targetId: R.id,
                                            kind: H,
                                            prompt: q.trim(),
                                            durationSec: 60 * z,
                                            failAfterHours: B,
                                            spiciness: Z,
                                        }),
                                        D()));
                            },
                            disabled: ec,
                        }),
                    ],
                }),
            }),
        ],
    });
}
