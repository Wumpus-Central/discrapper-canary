t.d(n, { default: () => N }), t(388685), t(415506);
var a = t(951288),
    l = t(647438),
    i = t(512722),
    r = t.n(i),
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
    y = t(812613),
    b = t(203437),
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
function N(e) {
    var n, t, i, N;
    let { guildId: C, sourceFile: S, existingSound: O, onClose: E, transitionState: P, showGuildPicker: I = !1 } = e,
        [Z, k] = l.useState(
            null != (t = null != (n = null == S ? void 0 : S.name) ? n : null == O ? void 0 : O.name) ? t : "",
        ),
        [M, T] = l.useState(null != (i = null == O ? void 0 : O.volume) ? i : 1),
        [F, D] = l.useState(null == O ? void 0 : O.emojiId),
        [R, B] = l.useState(null == O ? void 0 : O.emojiName),
        { file: H, loadAudioFromFile: A, maxVolume: U, setMaxVolume: z } = (0, p.p)(),
        [L, G] = l.useState(!1),
        [q, V] = l.useState(null),
        [W, Y] = l.useState(null),
        [J, K] = l.useState("ready"),
        [X, Q] = l.useState(C);
    async function $(e) {
        try {
            await A(null != e ? e : null), K("ready"), V(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
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
        (null == S ? void 0 : S.file) != null && e(S.file);
        async function e(e) {
            try {
                await A(e), K("ready"), V(null);
            } catch (e) {
                ee(e);
            }
        }
    }, [null == S ? void 0 : S.file, A]);
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
            Z.length >= 2 &&
            (ea || null != H) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= v.YW;
            })(W),
        ei = l.useCallback(async (e, n) => {
            K("encoding");
            try {
                let t = await (0, y.kV)(e, n);
                return K("ready"), t;
            } catch (e) {
                throw (K("encoding-failed"), e);
            }
        }, []),
        er = l.useCallback(async () => {
            if (null == H) return;
            r()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = H;
            if (null != W) {
                let n = await ei(H, W);
                if (null == n) return;
                e = n;
            }
            let n = (0, y.Zk)(e);
            K("uploading");
            try {
                await (0, y.bb)({
                    readPromise: n,
                    guildId: X,
                    name: Z,
                    volume: M,
                    emojiId: F,
                    emojiName: R,
                }),
                    K("ready");
            } catch (e) {
                throw new u.Z(e);
            }
        }, [H, X, Z, ei, W, M, F, R]),
        eo = l.useCallback(async () => {
            r()(null != X, "Cannot submit soundboard sound with no guildId"), G(!0), V(null);
            try {
                ea
                    ? await (0, g.$d)({
                          guildId: X,
                          soundId: O.soundId,
                          name: Z,
                          volume: M,
                          emojiId: F,
                          emojiName: R,
                      })
                    : (await er(),
                      (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.T7dhBA), s.ToastType.SUCCESS))),
                    E();
            } catch (e) {
                ee(e);
            } finally {
                K("ready"), G(!1), T(1), z(1);
            }
        }, [ea, E, X, O, Z, M, F, R, er, z]);
    (0, c.ZP)(() => {
        A(null),
            m.default.track(x.rMx.OPEN_MODAL, {
                type: "Soundboard Upload Sound",
                guild_id: X,
            });
    }),
        l.useEffect(() => {
            T(Math.min(M, U));
        }, [M, T, U]);
    let es = (0, a.jsx)(d.Z, {
            guildId: X,
            emojiId: F,
            emojiName: R,
            setEmojiId: D,
            setEmojiName: B,
            error: null == q ? void 0 : q.getFirstFieldErrorMessage("emoji"),
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
    return (0, a.jsxs)(o.Modal, {
        onClose: E,
        transitionState: P,
        title: ea ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t["ioD/9P"]),
        actions: eu,
        children: [
            null != q &&
                !q.hasFieldErrors() &&
                (0, a.jsx)(s.kzN, {
                    className: w.section,
                    children: q.message,
                }),
            I
                ? (0, a.jsx)(s.xJW, {
                      required: !0,
                      className: w.section,
                      title: j.intl.string(j.t.UYt7iY),
                      children: (0, a.jsx)(b.Z, {
                          value: X,
                          onChange: Q,
                      }),
                  })
                : null,
            (ea || null != H) &&
                (0, a.jsx)(h.Z, {
                    sound: O,
                    volume: M,
                    disabled: et,
                    onChange: Y,
                }),
            ea || null != S
                ? null
                : (0, a.jsx)(s.xJW, {
                      required: !0,
                      error: null == q ? void 0 : q.getFirstFieldErrorMessage("sound"),
                      className: w.section,
                      title: j.intl.string(j.t.sSHaGx),
                      children: (0, a.jsx)(f.Z, {
                          filename: null != (N = null == H ? void 0 : H.name) ? N : "",
                          buttonText: j.intl.string(j.t.zpi3XF),
                          placeholder: j.intl.string(j.t["x+YULy"]),
                          onFileSelect: $,
                          filters: _,
                      }),
                  }),
            (0, a.jsxs)("div", {
                className: w.multiInput,
                children: [
                    (0, a.jsx)(s.oil, {
                        required: !0,
                        label: j.intl.string(j.t.NpJGaG),
                        placeholder: j.intl.string(j.t.NpJGaG),
                        error: null == q ? void 0 : q.getFirstFieldErrorMessage("name"),
                        value: Z,
                        onChange: k,
                        maxLength: v.Ek,
                    }),
                    es,
                ],
            }),
            (0, a.jsx)(s.xJW, {
                error: null == q ? void 0 : q.getFirstFieldErrorMessage("volume"),
                className: w.section,
                title: j.intl.string(j.t["3CJlb2"]),
                children: (0, a.jsx)(s.iRW, {
                    initialValue: M,
                    onValueChange: (e) => T(e),
                    minValue: 0,
                    maxValue: U,
                }),
            }),
            null != en &&
                (0, a.jsx)("div", {
                    className: w.soundStateHint,
                    children: (0, a.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: en,
                    }),
                }),
        ],
    });
}
