t.d(n, { default: () => S }), t(388685), t(415506);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    s = t.n(o),
    u = t(82659),
    c = t(481060),
    d = t(479531),
    f = t(493773),
    m = t(349709),
    h = t(763610),
    g = t(626135),
    p = t(208049),
    y = t(671895),
    b = t(586826),
    v = t(812613),
    x = t(203437),
    j = t(710111),
    _ = t(981631),
    w = t(388032),
    N = t(711816);
let C = [
    {
        name: "audio",
        extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
    },
];
function S(e) {
    var n, t, i, o;
    let { guildId: S, sourceFile: O, existingSound: E, onClose: I, transitionState: P, showGuildPicker: k = !1 } = e,
        [Z, M] = l.useState(
            null != (t = null != (n = null == O ? void 0 : O.name) ? n : null == E ? void 0 : E.name) ? t : "",
        ),
        [T, F] = l.useState(null != (i = null == E ? void 0 : E.volume) ? i : 1),
        [D, R] = l.useState(null == E ? void 0 : E.emojiId),
        [B, H] = l.useState(null == E ? void 0 : E.emojiName),
        { file: A, loadAudioFromFile: U, maxVolume: z, setMaxVolume: L } = (0, b.p)(),
        [G, W] = l.useState(!1),
        [q, V] = l.useState(null),
        [J, Y] = l.useState(null),
        [K, X] = l.useState("ready"),
        [Q, $] = l.useState(S);
    async function ee(e) {
        try {
            await U(null != e ? e : null), X("ready"), V(null);
        } catch (e) {
            en(e);
        }
    }
    function en(e) {
        if (e instanceof d.Z) V(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message },
            };
            V(new d.Z(n));
        } else V(new d.Z(e));
    }
    l.useEffect(() => {
        (null == O ? void 0 : O.file) != null && e(O.file);
        async function e(e) {
            try {
                await U(e), X("ready"), V(null);
            } catch (e) {
                en(e);
            }
        }
    }, [null == O ? void 0 : O.file, U]);
    let et = (function (e) {
            switch (e) {
                case "encoding":
                    return w.intl.string(w.t["4IMMdH"]);
                case "encoding-failed":
                    return w.intl.string(w.t.Ka29xs);
                case "uploading":
                    return w.intl.string(w.t.ndr58f);
            }
            return null;
        })(K),
        ea = "uploading" === K || "encoding" === K,
        el = null != E,
        ei =
            Z.length >= 2 &&
            (el || null != A) &&
            null != Q &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= j.YW;
            })(J),
        er = l.useCallback(async (e, n) => {
            X("encoding");
            try {
                let t = await (0, v.kV)(e, n);
                return X("ready"), t;
            } catch (e) {
                throw (X("encoding-failed"), e);
            }
        }, []),
        eo = l.useCallback(async () => {
            if (null == A) return;
            s()(null != Q, "Cannot submit soundboard sound with no guildId");
            let e = A;
            if (null != J) {
                let n = await er(A, J);
                if (null == n) return;
                e = n;
            }
            let n = (0, v.Zk)(e);
            X("uploading");
            try {
                await (0, v.bb)({
                    readPromise: n,
                    guildId: Q,
                    name: Z,
                    volume: T,
                    emojiId: D,
                    emojiName: B,
                }),
                    X("ready");
            } catch (e) {
                throw new d.Z(e);
            }
        }, [A, Q, Z, er, J, T, D, B]),
        es = l.useCallback(async () => {
            s()(null != Q, "Cannot submit soundboard sound with no guildId"), W(!0), V(null);
            try {
                el
                    ? await (0, p.$d)({
                          guildId: Q,
                          soundId: E.soundId,
                          name: Z,
                          volume: T,
                          emojiId: D,
                          emojiName: B,
                      })
                    : (await eo(),
                      (0, c.showToast)((0, c.createToast)(w.intl.string(w.t.T7dhBA), c.ToastType.SUCCESS))),
                    I();
            } catch (e) {
                en(e);
            } finally {
                X("ready"), W(!1), F(1), L(1);
            }
        }, [el, I, Q, E, Z, T, D, B, eo, L]);
    (0, f.ZP)(() => {
        U(null),
            g.default.track(_.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: Q,
            });
    }),
        l.useEffect(() => {
            F(Math.min(T, z));
        }, [T, F, z]);
    let eu = (0, a.jsx)(m.Z, {
            guildId: Q,
            emojiId: D,
            emojiName: B,
            setEmojiId: R,
            setEmojiName: H,
            error: null == q ? void 0 : q.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        ec = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: w.intl.string(w.t.Khpixc),
                    onClick: I,
                    disabled: G,
                },
                {
                    text: el ? w.intl.string(w.t["bZY17+"]) : w.intl.string(w.t.RGJbYG),
                    onClick: es,
                    variant: "primary",
                    disabled: !ei,
                    loading: G,
                },
            ],
            [es, ei, G, el, I],
        );
    return (0, a.jsxs)(u.Modal, {
        onClose: I,
        transitionState: P,
        title: el ? w.intl.string(w.t.HmsZGR) : w.intl.string(w.t["ioD/9P"]),
        actions: ec,
        children: [
            null != q &&
                !q.hasFieldErrors() &&
                (0, a.jsx)(c.kzN, {
                    className: N.section,
                    children: q.message,
                }),
            k
                ? (0, a.jsx)(c.xJW, {
                      required: !0,
                      className: N.section,
                      title: w.intl.string(w.t.UYt7iY),
                      children: (0, a.jsx)(x.Z, {
                          value: Q,
                          onChange: $,
                      }),
                  })
                : null,
            (el || null != A) &&
                (0, a.jsx)(y.Z, {
                    sound: E,
                    volume: T,
                    disabled: ea,
                    onChange: Y,
                }),
            el || null != O
                ? null
                : (0, a.jsx)(c.xJW, {
                      required: !0,
                      error: null == q ? void 0 : q.getFirstFieldErrorMessage("sound"),
                      className: N.section,
                      title: w.intl.string(w.t.sSHaGx),
                      children: (0, a.jsx)(h.Z, {
                          filename: null != (o = null == A ? void 0 : A.name) ? o : "",
                          buttonText: w.intl.string(w.t.zpi3XF),
                          placeholder: w.intl.string(w.t["x+YULy"]),
                          onFileSelect: ee,
                          filters: C,
                      }),
                  }),
            (0, a.jsxs)("div", {
                className: N.multiInput,
                children: [
                    (0, a.jsx)(c.xJW, {
                        required: !0,
                        error: null == q ? void 0 : q.getFirstFieldErrorMessage("name"),
                        className: r()(N.section, N.halfInput),
                        title: w.intl.string(w.t.NpJGaG),
                        children: (0, a.jsx)(c.oil, {
                            placeholder: w.intl.string(w.t.NpJGaG),
                            value: Z,
                            onChange: M,
                            maxLength: j.Ek,
                        }),
                    }),
                    eu,
                ],
            }),
            (0, a.jsx)(c.xJW, {
                error: null == q ? void 0 : q.getFirstFieldErrorMessage("volume"),
                className: N.section,
                title: w.intl.string(w.t["3CJlb2"]),
                children: (0, a.jsx)(c.iRW, {
                    initialValue: T,
                    onValueChange: (e) => F(e),
                    minValue: 0,
                    maxValue: z,
                }),
            }),
            null != et &&
                (0, a.jsx)("div", {
                    className: N.soundStateHint,
                    children: (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: et,
                    }),
                }),
        ],
    });
}
