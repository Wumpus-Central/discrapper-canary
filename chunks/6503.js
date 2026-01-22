n.d(t, {
    default: () => N,
}),
    n(896048),
    n(65821);
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(158954),
    u = n(397927),
    o = n(181658),
    c = n(964486),
    d = n(78213),
    f = n(643374),
    m = n(954571),
    g = n(796774),
    h = n(461123),
    v = n(236972),
    b = n(352024),
    x = n(698154),
    p = n(980504),
    j = n(652215),
    y = n(985018);
let w = [
    {
        name: "audio",
        extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
    },
];

function N(e) {
    var t, n, a, N;
    let { guildId: O, sourceFile: A, existingSound: C, onClose: S, transitionState: P, showGuildPicker: E = !1 } = e,
        [M, k] = i.useState(
            null != (t = null != (n = null == A ? void 0 : A.name) ? n : null == C ? void 0 : C.name) ? t : "",
        ),
        [T, D] = i.useState(null != (a = null == C ? void 0 : C.volume) ? a : 1),
        [I, F] = i.useState(null == C ? void 0 : C.emojiId),
        [L, R] = i.useState(null == C ? void 0 : C.emojiName),
        { file: U, loadAudioFromFile: _, maxVolume: J, setMaxVolume: G } = (0, v.L)(),
        [V, z] = i.useState(!1),
        [B, Y] = i.useState(null),
        [q, H] = i.useState(null),
        [W, X] = i.useState("ready"),
        [K, Q] = i.useState(O);
    async function $(e) {
        try {
            await _(null != e ? e : null), X("ready"), Y(null);
        } catch (e) {
            Z(e);
        }
    }

    function Z(e) {
        if (e instanceof o.A) Y(e);
        else if (e instanceof Error) {
            let t = {
                status: 500,
                body: {
                    message: e.message,
                },
            };
            Y(new o.A(t));
        } else Y(new o.A(e));
    }
    i.useEffect(() => {
        (null == A ? void 0 : A.file) != null && e(A.file);
        async function e(e) {
            try {
                await _(e), X("ready"), Y(null);
            } catch (e) {
                Z(e);
            }
        }
    }, [null == A ? void 0 : A.file, _]);
    let ee = (function (e) {
            switch (e) {
                case "encoding":
                    return y.intl.string(y.t["4IMMdB"]);
                case "encoding-failed":
                    return y.intl.string(y.t.Ka29xq);
                case "uploading":
                    return y.intl.string(y.t.ndr58Q);
            }
            return null;
        })(W),
        et = "uploading" === W || "encoding" === W,
        en = null != C,
        el =
            M.length >= 2 &&
            (en || null != U) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= p.cT;
            })(q),
        ei = i.useCallback(async (e, t) => {
            X("encoding");
            try {
                let n = await (0, b.Yo)(e, t);
                return X("ready"), n;
            } catch (e) {
                throw (X("encoding-failed"), e);
            }
        }, []),
        ea = i.useCallback(async () => {
            if (null == U) return;
            r()(null != K, "Cannot submit soundboard sound with no guildId");
            let e = U;
            if (null != q) {
                let t = await ei(U, q);
                if (null == t) return;
                e = t;
            }
            let t = (0, b.YK)(e);
            X("uploading");
            try {
                await (0, b.JX)({
                    readPromise: t,
                    guildId: K,
                    name: M,
                    volume: T,
                    emojiId: I,
                    emojiName: L,
                }),
                    X("ready");
            } catch (e) {
                throw new o.A(e);
            }
        }, [U, K, M, ei, q, T, I, L]),
        er = i.useCallback(async () => {
            r()(null != K, "Cannot submit soundboard sound with no guildId"), z(!0), Y(null);
            try {
                en
                    ? await (0, g.xV)({
                          guildId: K,
                          soundId: C.soundId,
                          name: M,
                          volume: T,
                          emojiId: I,
                          emojiName: L,
                      })
                    : (await ea(),
                      (0, u.showToast)((0, u.createToast)(y.intl.string(y.t.T7dhBL), u.ToastType.SUCCESS))),
                    S();
            } catch (e) {
                Z(e);
            } finally {
                X("ready"), z(!1), D(1), G(1);
            }
        }, [en, S, K, C, M, T, I, L, ea, G]);
    (0, c.Ay)(() => {
        _(null),
            m.default.track(j.HAw.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: K,
            });
    }),
        i.useEffect(() => {
            D(Math.min(T, J));
        }, [T, D, J]);
    let es = (0, l.jsx)(d.A, {
            guildId: K,
            emojiId: I,
            emojiName: L,
            setEmojiId: F,
            setEmojiName: R,
            error: null == B ? void 0 : B.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        eu = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: y.intl.string(y.t.Khpixd),
                    onClick: S,
                    disabled: V,
                },
                {
                    text: en ? y.intl.string(y.t.bZY171) : y.intl.string(y.t.RGJbYB),
                    onClick: er,
                    variant: "primary",
                    disabled: !el,
                    loading: V,
                },
            ],
            [er, el, V, en, S],
        );
    return (0, l.jsx)(s.Modal, {
        onClose: S,
        transitionState: P,
        title: en ? y.intl.string(y.t.HmsZGS) : y.intl.string(y.t["ioD/9I"]),
        actions: eu,
        children: (0, l.jsxs)(s.nVY, {
            children: [
                null != B &&
                    !B.hasFieldErrors() &&
                    (0, l.jsx)(s.wx6, {
                        type: "critical",
                        children: B.message,
                    }),
                E
                    ? (0, l.jsx)(x.A, {
                          label: y.intl.string(y.t.UYt7iQ),
                          value: K,
                          onChange: Q,
                      })
                    : null,
                (en || null != U) &&
                    (0, l.jsx)(h.A, {
                        sound: C,
                        volume: T,
                        disabled: et,
                        onChange: H,
                    }),
                en || null != A
                    ? null
                    : (0, l.jsx)(s.D0$, {
                          required: !0,
                          errorMessage: null == B ? void 0 : B.getFirstFieldErrorMessage("sound"),
                          label: y.intl.string(y.t.sSHaG7),
                          children: (0, l.jsx)(f.A, {
                              filename: null != (N = null == U ? void 0 : U.name) ? N : "",
                              buttonText: y.intl.string(y.t.zpi3XG),
                              placeholder: y.intl.string(y.t["x+YUL9"]),
                              onFileSelect: $,
                              filters: w,
                          }),
                      }),
                (0, l.jsxs)(s.M_l, {
                    children: [
                        (0, l.jsx)(u.ksK, {
                            required: !0,
                            label: y.intl.string(y.t.NpJGaM),
                            placeholder: y.intl.string(y.t.NpJGaM),
                            error: null == B ? void 0 : B.getFirstFieldErrorMessage("name"),
                            value: M,
                            onChange: k,
                            maxLength: p.Ah,
                        }),
                        es,
                    ],
                }),
                (0, l.jsx)(u.Apm, {
                    label: y.intl.string(y.t["3CJlb1"]),
                    errorMessage: null == B ? void 0 : B.getFirstFieldErrorMessage("volume"),
                    helperText: null != ee ? ee : void 0,
                    initialValue: T,
                    onValueChange: (e) => D(e),
                    minValue: 0,
                    maxValue: J,
                }),
            ],
        }),
    });
}
