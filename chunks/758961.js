t.d(n, { default: () => w }), t(388685), t(415506);
var l = t(951288),
    a = t(647438),
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
    let { guildId: C, sourceFile: S, existingSound: O, onClose: Z, transitionState: P, showGuildPicker: M = !1 } = e,
        [E, k] = a.useState(
            null != (t = null != (n = null == S ? void 0 : S.name) ? n : null == O ? void 0 : O.name) ? t : "",
        ),
        [I, T] = a.useState(null != (i = null == O ? void 0 : O.volume) ? i : 1),
        [D, F] = a.useState(null == O ? void 0 : O.emojiId),
        [R, B] = a.useState(null == O ? void 0 : O.emojiName),
        { file: _, loadAudioFromFile: U, maxVolume: z, setMaxVolume: G } = (0, v.p)(),
        [L, H] = a.useState(!1),
        [V, A] = a.useState(null),
        [W, Y] = a.useState(null),
        [q, J] = a.useState("ready"),
        [K, Q] = a.useState(C);
    async function X(e) {
        try {
            await U(null != e ? e : null), J("ready"), A(null);
        } catch (e) {
            $(e);
        }
    }
    function $(e) {
        if (e instanceof u.Z) A(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message },
            };
            A(new u.Z(n));
        } else A(new u.Z(e));
    }
    a.useEffect(() => {
        (null == S ? void 0 : S.file) != null && e(S.file);
        async function e(e) {
            try {
                await U(e), J("ready"), A(null);
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
        })(q),
        en = "uploading" === q || "encoding" === q,
        et = null != O,
        el =
            E.length >= 2 &&
            (et || null != _) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= y.YW;
            })(W),
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
            if (null == _) return;
            r()(null != K, "Cannot submit soundboard sound with no guildId");
            let e = _;
            if (null != W) {
                let n = await ea(_, W);
                if (null == n) return;
                e = n;
            }
            let n = (0, p.Zk)(e);
            J("uploading");
            try {
                await (0, p.bb)({
                    readPromise: n,
                    guildId: K,
                    name: E,
                    volume: I,
                    emojiId: D,
                    emojiName: R,
                }),
                    J("ready");
            } catch (e) {
                throw new u.Z(e);
            }
        }, [_, K, E, ea, W, I, D, R]),
        er = a.useCallback(async () => {
            r()(null != K, "Cannot submit soundboard sound with no guildId"), H(!0), A(null);
            try {
                et
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: O.soundId,
                          name: E,
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
                J("ready"), H(!1), T(1), G(1);
            }
        }, [et, Z, K, O, E, I, D, R, ei, G]);
    (0, c.ZP)(() => {
        U(null),
            m.default.track(j.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: K,
            });
    }),
        a.useEffect(() => {
            T(Math.min(I, z));
        }, [I, T, z]);
    let es = (0, l.jsx)(d.Z, {
            guildId: K,
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
                M
                    ? (0, l.jsx)(b.Z, {
                          label: x.intl.string(x.t.UYt7iQ),
                          value: K,
                          onChange: Q,
                      })
                    : null,
                (et || null != _) &&
                    (0, l.jsx)(h.Z, {
                        sound: O,
                        volume: I,
                        disabled: en,
                        onChange: Y,
                    }),
                et || null != S
                    ? null
                    : (0, l.jsx)(s.gNt, {
                          required: !0,
                          errorMessage: null == V ? void 0 : V.getFirstFieldErrorMessage("sound"),
                          label: x.intl.string(x.t.sSHaG7),
                          children: (0, l.jsx)(f.Z, {
                              filename: null != (w = null == _ ? void 0 : _.name) ? w : "",
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
                            value: E,
                            onChange: k,
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
                    maxValue: z,
                }),
            ],
        }),
    });
}
