t.d(n, { default: () => w }), t(388685), t(415506);
var l = t(54381),
    a = t(473749),
    i = t(512722),
    r = t.n(i),
    s = t(793030),
    o = t(481060),
    u = t(479531),
    c = t(493773),
    d = t(349709),
    f = t(763610),
    m = t(626135),
    g = t(208049),
    h = t(671895),
    v = t(586826),
    p = t(812613),
    b = t(203437),
    y = t(710111),
    j = t(981631),
    x = t(388032);
let N = [
    {
        name: "audio",
        extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
    },
];
function w(e) {
    var n, t, i, w;
    let { guildId: C, sourceFile: S, existingSound: O, onClose: Z, transitionState: P, showGuildPicker: E = !1 } = e,
        [k, M] = a.useState(
            null != (t = null != (n = null == S ? void 0 : S.name) ? n : null == O ? void 0 : O.name) ? t : "",
        ),
        [I, T] = a.useState(null != (i = null == O ? void 0 : O.volume) ? i : 1),
        [D, F] = a.useState(null == O ? void 0 : O.emojiId),
        [R, B] = a.useState(null == O ? void 0 : O.emojiName),
        { file: G, loadAudioFromFile: U, maxVolume: _, setMaxVolume: z } = (0, v.p)(),
        [L, H] = a.useState(!1),
        [V, W] = a.useState(null),
        [A, q] = a.useState(null),
        [Y, J] = a.useState("ready"),
        [Q, K] = a.useState(C);
    async function X(e) {
        try {
            await U(null != e ? e : null), J("ready"), W(null);
        } catch (e) {
            $(e);
        }
    }
    function $(e) {
        if (e instanceof u.Z) W(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message },
            };
            W(new u.Z(n));
        } else W(new u.Z(e));
    }
    a.useEffect(() => {
        (null == S ? void 0 : S.file) != null && e(S.file);
        async function e(e) {
            try {
                await U(e), J("ready"), W(null);
            } catch (e) {
                $(e);
            }
        }
    }, [null == S ? void 0 : S.file, U]);
    let ee = (function (e) {
            switch (e) {
                case "encoding":
                    return x.intl.string(x.t["4IMMdB"]);
                case "encoding-failed":
                    return x.intl.string(x.t.Ka29xq);
                case "uploading":
                    return x.intl.string(x.t.ndr58Q);
            }
            return null;
        })(Y),
        en = "uploading" === Y || "encoding" === Y,
        et = null != O,
        el =
            k.length >= 2 &&
            (et || null != G) &&
            null != Q &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= y.YW;
            })(A),
        ea = a.useCallback(async (e, n) => {
            J("encoding");
            try {
                let t = await (0, p.kV)(e, n);
                return J("ready"), t;
            } catch (e) {
                throw (J("encoding-failed"), e);
            }
        }, []),
        ei = a.useCallback(async () => {
            if (null == G) return;
            r()(null != Q, "Cannot submit soundboard sound with no guildId");
            let e = G;
            if (null != A) {
                let n = await ea(G, A);
                if (null == n) return;
                e = n;
            }
            let n = (0, p.Zk)(e);
            J("uploading");
            try {
                await (0, p.bb)({
                    readPromise: n,
                    guildId: Q,
                    name: k,
                    volume: I,
                    emojiId: D,
                    emojiName: R,
                }),
                    J("ready");
            } catch (e) {
                throw new u.Z(e);
            }
        }, [G, Q, k, ea, A, I, D, R]),
        er = a.useCallback(async () => {
            r()(null != Q, "Cannot submit soundboard sound with no guildId"), H(!0), W(null);
            try {
                et
                    ? await (0, g.$d)({
                          guildId: Q,
                          soundId: O.soundId,
                          name: k,
                          volume: I,
                          emojiId: D,
                          emojiName: R,
                      })
                    : (await ei(),
                      (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.T7dhBL), o.ToastType.SUCCESS))),
                    Z();
            } catch (e) {
                $(e);
            } finally {
                J("ready"), H(!1), T(1), z(1);
            }
        }, [et, Z, Q, O, k, I, D, R, ei, z]);
    (0, c.ZP)(() => {
        U(null),
            m.default.track(j.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: Q,
            });
    }),
        a.useEffect(() => {
            T(Math.min(I, _));
        }, [I, T, _]);
    let es = (0, l.jsx)(d.Z, {
            guildId: Q,
            emojiId: D,
            emojiName: R,
            setEmojiId: F,
            setEmojiName: B,
            error: null == V ? void 0 : V.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        eo = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: x.intl.string(x.t.Khpixd),
                    onClick: Z,
                    disabled: L,
                },
                {
                    text: et ? x.intl.string(x.t.bZY171) : x.intl.string(x.t.RGJbYB),
                    onClick: er,
                    variant: "primary",
                    disabled: !el,
                    loading: L,
                },
            ],
            [er, el, L, et, Z],
        );
    return (0, l.jsx)(s.Modal, {
        onClose: Z,
        transitionState: P,
        title: et ? x.intl.string(x.t.HmsZGS) : x.intl.string(x.t["ioD/9I"]),
        actions: eo,
        children: (0, l.jsxs)(s.C3N, {
            children: [
                null != V &&
                    !V.hasFieldErrors() &&
                    (0, l.jsx)(s.M14, {
                        type: "critical",
                        children: V.message,
                    }),
                E
                    ? (0, l.jsx)(b.Z, {
                          label: x.intl.string(x.t.UYt7iQ),
                          value: Q,
                          onChange: K,
                      })
                    : null,
                (et || null != G) &&
                    (0, l.jsx)(h.Z, {
                        sound: O,
                        volume: I,
                        disabled: en,
                        onChange: q,
                    }),
                et || null != S
                    ? null
                    : (0, l.jsx)(s.gNt, {
                          required: !0,
                          errorMessage: null == V ? void 0 : V.getFirstFieldErrorMessage("sound"),
                          label: x.intl.string(x.t.sSHaG7),
                          children: (0, l.jsx)(f.Z, {
                              filename: null != (w = null == G ? void 0 : G.name) ? w : "",
                              buttonText: x.intl.string(x.t.zpi3XG),
                              placeholder: x.intl.string(x.t["x+YUL9"]),
                              onFileSelect: X,
                              filters: N,
                          }),
                      }),
                (0, l.jsxs)(s.NIo, {
                    children: [
                        (0, l.jsx)(o.oil, {
                            required: !0,
                            label: x.intl.string(x.t.NpJGaM),
                            placeholder: x.intl.string(x.t.NpJGaM),
                            error: null == V ? void 0 : V.getFirstFieldErrorMessage("name"),
                            value: k,
                            onChange: M,
                            maxLength: y.Ek,
                        }),
                        es,
                    ],
                }),
                (0, l.jsx)(o.iRW, {
                    label: x.intl.string(x.t["3CJlb1"]),
                    errorMessage: null == V ? void 0 : V.getFirstFieldErrorMessage("volume"),
                    helperText: null != ee ? ee : void 0,
                    initialValue: I,
                    onValueChange: (e) => T(e),
                    minValue: 0,
                    maxValue: _,
                }),
            ],
        }),
    });
}
