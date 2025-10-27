t.d(n, { default: () => _ }), t(388685), t(415506);
var a = t(951288),
    l = t(647438),
    r = t(512722),
    i = t.n(r),
    o = t(793030),
    s = t(481060),
    u = t(479531),
    c = t(493773),
    d = t(349709),
    f = t(763610),
    m = t(626135),
    g = t(208049),
    h = t(671895),
    p = t(586826),
    b = t(812613),
    y = t(203437),
    v = t(710111),
    x = t(981631),
    j = t(388032);
let w = [
    {
        name: "audio",
        extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
    },
];
function _(e) {
    var n, t, r, _;
    let { guildId: C, sourceFile: N, existingSound: S, onClose: O, transitionState: P, showGuildPicker: E = !1 } = e,
        [I, M] = l.useState(
            null != (t = null != (n = null == N ? void 0 : N.name) ? n : null == S ? void 0 : S.name) ? t : "",
        ),
        [Z, k] = l.useState(null != (r = null == S ? void 0 : S.volume) ? r : 1),
        [T, F] = l.useState(null == S ? void 0 : S.emojiId),
        [D, R] = l.useState(null == S ? void 0 : S.emojiName),
        { file: B, loadAudioFromFile: U, maxVolume: A, setMaxVolume: H } = (0, p.p)(),
        [z, L] = l.useState(!1),
        [G, V] = l.useState(null),
        [q, W] = l.useState(null),
        [Y, J] = l.useState("ready"),
        [K, Q] = l.useState(C);
    async function X(e) {
        try {
            await U(null != e ? e : null), J("ready"), V(null);
        } catch (e) {
            $(e);
        }
    }
    function $(e) {
        if (e instanceof u.Z) V(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message },
            };
            V(new u.Z(n));
        } else V(new u.Z(e));
    }
    l.useEffect(() => {
        (null == N ? void 0 : N.file) != null && e(N.file);
        async function e(e) {
            try {
                await U(e), J("ready"), V(null);
            } catch (e) {
                $(e);
            }
        }
    }, [null == N ? void 0 : N.file, U]);
    let ee = (function (e) {
            switch (e) {
                case "encoding":
                    return j.intl.string(j.t["4IMMdB"]);
                case "encoding-failed":
                    return j.intl.string(j.t.Ka29xq);
                case "uploading":
                    return j.intl.string(j.t.ndr58Q);
            }
            return null;
        })(Y),
        en = "uploading" === Y || "encoding" === Y,
        et = null != S,
        ea =
            I.length >= 2 &&
            (et || null != B) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= v.YW;
            })(q),
        el = l.useCallback(async (e, n) => {
            J("encoding");
            try {
                let t = await (0, b.kV)(e, n);
                return J("ready"), t;
            } catch (e) {
                throw (J("encoding-failed"), e);
            }
        }, []),
        er = l.useCallback(async () => {
            if (null == B) return;
            i()(null != K, "Cannot submit soundboard sound with no guildId");
            let e = B;
            if (null != q) {
                let n = await el(B, q);
                if (null == n) return;
                e = n;
            }
            let n = (0, b.Zk)(e);
            J("uploading");
            try {
                await (0, b.bb)({
                    readPromise: n,
                    guildId: K,
                    name: I,
                    volume: Z,
                    emojiId: T,
                    emojiName: D,
                }),
                    J("ready");
            } catch (e) {
                throw new u.Z(e);
            }
        }, [B, K, I, el, q, Z, T, D]),
        ei = l.useCallback(async () => {
            i()(null != K, "Cannot submit soundboard sound with no guildId"), L(!0), V(null);
            try {
                et
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: S.soundId,
                          name: I,
                          volume: Z,
                          emojiId: T,
                          emojiName: D,
                      })
                    : (await er(),
                      (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBL), s.ToastType.SUCCESS))),
                    O();
            } catch (e) {
                $(e);
            } finally {
                J("ready"), L(!1), k(1), H(1);
            }
        }, [et, O, K, S, I, Z, T, D, er, H]);
    (0, c.ZP)(() => {
        U(null),
            m.default.track(x.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: K,
            });
    }),
        l.useEffect(() => {
            k(Math.min(Z, A));
        }, [Z, k, A]);
    let eo = (0, a.jsx)(d.Z, {
            guildId: K,
            emojiId: T,
            emojiName: D,
            setEmojiId: F,
            setEmojiName: R,
            error: null == G ? void 0 : G.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        es = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: j.intl.string(j.t.Khpixd),
                    onClick: O,
                    disabled: z,
                },
                {
                    text: et ? j.intl.string(j.t.bZY171) : j.intl.string(j.t.RGJbYB),
                    onClick: ei,
                    variant: "primary",
                    disabled: !ea,
                    loading: z,
                },
            ],
            [ei, ea, z, et, O],
        );
    return (0, a.jsx)(o.Modal, {
        onClose: O,
        transitionState: P,
        title: et ? j.intl.string(j.t.HmsZGS) : j.intl.string(j.t["ioD/9I"]),
        actions: es,
        children: (0, a.jsxs)(o.C3N, {
            children: [
                null != G &&
                    !G.hasFieldErrors() &&
                    (0, a.jsx)(o.M14, {
                        type: "critical",
                        children: G.message,
                    }),
                E
                    ? (0, a.jsx)(y.Z, {
                          label: j.intl.string(j.t.UYt7iQ),
                          value: K,
                          onChange: Q,
                      })
                    : null,
                (et || null != B) &&
                    (0, a.jsx)(h.Z, {
                        sound: S,
                        volume: Z,
                        disabled: en,
                        onChange: W,
                    }),
                et || null != N
                    ? null
                    : (0, a.jsx)(o.gNt, {
                          required: !0,
                          errorMessage: null == G ? void 0 : G.getFirstFieldErrorMessage("sound"),
                          label: j.intl.string(j.t.sSHaG7),
                          children: (0, a.jsx)(f.Z, {
                              filename: null != (_ = null == B ? void 0 : B.name) ? _ : "",
                              buttonText: j.intl.string(j.t.zpi3XG),
                              placeholder: j.intl.string(j.t["x+YUL9"]),
                              onFileSelect: X,
                              filters: w,
                          }),
                      }),
                (0, a.jsxs)(o.NIo, {
                    children: [
                        (0, a.jsx)(s.oil, {
                            required: !0,
                            label: j.intl.string(j.t.NpJGaM),
                            placeholder: j.intl.string(j.t.NpJGaM),
                            error: null == G ? void 0 : G.getFirstFieldErrorMessage("name"),
                            value: I,
                            onChange: M,
                            maxLength: v.Ek,
                        }),
                        eo,
                    ],
                }),
                (0, a.jsx)(s.iRW, {
                    label: j.intl.string(j.t["3CJlb1"]),
                    errorMessage: null == G ? void 0 : G.getFirstFieldErrorMessage("volume"),
                    helperText: null != ee ? ee : void 0,
                    initialValue: Z,
                    onValueChange: (e) => k(e),
                    minValue: 0,
                    maxValue: A,
                }),
            ],
        }),
    });
}
