t.d(n, { default: () => C }), t(388685), t(415506);
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
    j = t(388032),
    w = t(711816);
let _ = [
    {
        name: "audio",
        extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
    },
];
function C(e) {
    var n, t, r, C;
    let { guildId: N, sourceFile: S, existingSound: O, onClose: E, transitionState: P, showGuildPicker: I = !1 } = e,
        [M, Z] = l.useState(
            null != (t = null != (n = null == S ? void 0 : S.name) ? n : null == O ? void 0 : O.name) ? t : "",
        ),
        [k, T] = l.useState(null != (r = null == O ? void 0 : O.volume) ? r : 1),
        [F, D] = l.useState(null == O ? void 0 : O.emojiId),
        [R, B] = l.useState(null == O ? void 0 : O.emojiName),
        { file: A, loadAudioFromFile: U, maxVolume: H, setMaxVolume: z } = (0, p.p)(),
        [L, G] = l.useState(!1),
        [V, q] = l.useState(null),
        [W, Y] = l.useState(null),
        [J, K] = l.useState("ready"),
        [X, Q] = l.useState(N);
    async function $(e) {
        try {
            await U(null != e ? e : null), K("ready"), q(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
        if (e instanceof u.Z) q(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message },
            };
            q(new u.Z(n));
        } else q(new u.Z(e));
    }
    l.useEffect(() => {
        (null == S ? void 0 : S.file) != null && e(S.file);
        async function e(e) {
            try {
                await U(e), K("ready"), q(null);
            } catch (e) {
                ee(e);
            }
        }
    }, [null == S ? void 0 : S.file, U]);
    let en = (function (e) {
            switch (e) {
                case "encoding":
                    return j.intl.string(j.t["4IMMdH"]);
                case "encoding-failed":
                    return j.intl.string(j.t.Ka29xs);
                case "uploading":
                    return j.intl.string(j.t.ndr58f);
            }
            return null;
        })(J),
        et = "uploading" === J || "encoding" === J,
        ea = null != O,
        el =
            M.length >= 2 &&
            (ea || null != A) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= v.YW;
            })(W),
        er = l.useCallback(async (e, n) => {
            K("encoding");
            try {
                let t = await (0, b.kV)(e, n);
                return K("ready"), t;
            } catch (e) {
                throw (K("encoding-failed"), e);
            }
        }, []),
        ei = l.useCallback(async () => {
            if (null == A) return;
            i()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = A;
            if (null != W) {
                let n = await er(A, W);
                if (null == n) return;
                e = n;
            }
            let n = (0, b.Zk)(e);
            K("uploading");
            try {
                await (0, b.bb)({
                    readPromise: n,
                    guildId: X,
                    name: M,
                    volume: k,
                    emojiId: F,
                    emojiName: R,
                }),
                    K("ready");
            } catch (e) {
                throw new u.Z(e);
            }
        }, [A, X, M, er, W, k, F, R]),
        eo = l.useCallback(async () => {
            i()(null != X, "Cannot submit soundboard sound with no guildId"), G(!0), q(null);
            try {
                ea
                    ? await (0, g.$d)({
                          guildId: X,
                          soundId: O.soundId,
                          name: M,
                          volume: k,
                          emojiId: F,
                          emojiName: R,
                      })
                    : (await ei(),
                      (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBA), s.ToastType.SUCCESS))),
                    E();
            } catch (e) {
                ee(e);
            } finally {
                K("ready"), G(!1), T(1), z(1);
            }
        }, [ea, E, X, O, M, k, F, R, ei, z]);
    (0, c.ZP)(() => {
        U(null),
            m.default.track(x.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: X,
            });
    }),
        l.useEffect(() => {
            T(Math.min(k, H));
        }, [k, T, H]);
    let es = (0, a.jsx)(d.Z, {
            guildId: X,
            emojiId: F,
            emojiName: R,
            setEmojiId: D,
            setEmojiName: B,
            error: null == V ? void 0 : V.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        eu = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: j.intl.string(j.t.Khpixc),
                    onClick: E,
                    disabled: L,
                },
                {
                    text: ea ? j.intl.string(j.t["bZY17+"]) : j.intl.string(j.t.RGJbYG),
                    onClick: eo,
                    variant: "primary",
                    disabled: !el,
                    loading: L,
                },
            ],
            [eo, el, L, ea, E],
        );
    return (0, a.jsx)(o.Modal, {
        onClose: E,
        transitionState: P,
        title: ea ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t["ioD/9P"]),
        actions: eu,
        children: (0, a.jsxs)(o.C3N, {
            children: [
                null != V &&
                    !V.hasFieldErrors() &&
                    (0, a.jsx)(s.kzN, {
                        className: w.section,
                        children: V.message,
                    }),
                I
                    ? (0, a.jsx)(y.Z, {
                          label: j.intl.string(j.t.UYt7iY),
                          value: X,
                          onChange: Q,
                      })
                    : null,
                (ea || null != A) &&
                    (0, a.jsx)(h.Z, {
                        sound: O,
                        volume: k,
                        disabled: et,
                        onChange: Y,
                    }),
                ea || null != S
                    ? null
                    : (0, a.jsx)(o.gNt, {
                          required: !0,
                          errorMessage: null == V ? void 0 : V.getFirstFieldErrorMessage("sound"),
                          label: j.intl.string(j.t.sSHaGx),
                          children: (0, a.jsx)(f.Z, {
                              filename: null != (C = null == A ? void 0 : A.name) ? C : "",
                              buttonText: j.intl.string(j.t.zpi3XF),
                              placeholder: j.intl.string(j.t["x+YULy"]),
                              onFileSelect: $,
                              filters: _,
                          }),
                      }),
                (0, a.jsxs)(o.NIo, {
                    children: [
                        (0, a.jsx)(s.oil, {
                            required: !0,
                            label: j.intl.string(j.t.NpJGaG),
                            placeholder: j.intl.string(j.t.NpJGaG),
                            error: null == V ? void 0 : V.getFirstFieldErrorMessage("name"),
                            value: M,
                            onChange: Z,
                            maxLength: v.Ek,
                        }),
                        es,
                    ],
                }),
                (0, a.jsx)(s.iRW, {
                    label: j.intl.string(j.t["3CJlb2"]),
                    errorMessage: null == V ? void 0 : V.getFirstFieldErrorMessage("volume"),
                    helperText: null != en ? en : void 0,
                    initialValue: k,
                    onValueChange: (e) => T(e),
                    minValue: 0,
                    maxValue: H,
                }),
            ],
        }),
    });
}
