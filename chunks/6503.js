l.d(t, { default: () => P });
var n = l(627968),
    a = l(64700),
    i = l(284009),
    s = l.n(i),
    r = l(189213),
    u = l(270003),
    o = l(683071),
    d = l(452027),
    c = l(532446),
    m = l(691540),
    f = l(857250),
    h = l(97483),
    g = l(292666),
    x = l(106236),
    v = l(181658),
    j = l(964486),
    p = l(78213),
    N = l(643374),
    A = l(954571),
    C = l(796774),
    b = l(461123),
    y = l(236972),
    w = l(352024),
    E = l(698154);
l(980504);
var S = l(652215),
    M = l(985018);
let k = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function P(e) {
    let { guildId: t, sourceFile: l, existingSound: i, onClose: P, transitionState: T, showGuildPicker: I = !1 } = e,
        [D, F] = a.useState(l?.name ?? i?.name ?? ""),
        [L, R] = a.useState(i?.volume ?? 1),
        [O, _] = a.useState(i?.emojiId),
        [J, U] = a.useState(i?.emojiName),
        { file: G, loadAudioFromFile: B, maxVolume: V, setMaxVolume: z } = (0, y.L)(),
        [Y, q] = a.useState(!1),
        [X, H] = a.useState(null),
        [$, Q] = a.useState(null),
        [W, K] = a.useState("ready"),
        [Z, ee] = a.useState(t);
    async function et(e) {
        try {
            await B(e ?? null), K("ready"), H(null);
        } catch (e) {
            el(e);
        }
    }
    function el(e) {
        if (e instanceof v.A) H(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            H(new v.A(t));
        } else H(new v.A(e));
    }
    a.useEffect(() => {
        l?.file != null && e(l.file);
        async function e(e) {
            try {
                await B(e), K("ready"), H(null);
            } catch (e) {
                el(e);
            }
        }
    }, [l?.file, B]);
    let en = (function (e) {
            switch (e) {
                case "encoding":
                    return M.intl.string(M.t["4IMMdB"]);
                case "encoding-failed":
                    return M.intl.string(M.t.Ka29xq);
                case "uploading":
                    return M.intl.string(M.t.ndr58Q);
            }
            return null;
        })(W),
        ea = "uploading" === W || "encoding" === W,
        ei = null != i,
        es =
            D.length >= 2 &&
            (ei || null != G) &&
            null != Z &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })($),
        er = a.useCallback(async (e, t) => {
            K("encoding");
            try {
                let l = await (0, w.Yo)(e, t);
                return K("ready"), l;
            } catch (e) {
                throw (K("encoding-failed"), e);
            }
        }, []),
        eu = a.useCallback(async () => {
            if (null == G) return;
            s()(null != Z, "Cannot submit soundboard sound with no guildId");
            let e = G;
            if (null != $) {
                let t = await er(G, $);
                if (null == t) return;
                e = t;
            }
            let t = (0, w.YK)(e);
            K("uploading");
            try {
                await (0, w.JX)({ readPromise: t, guildId: Z, name: D, volume: L, emojiId: O, emojiName: J }),
                    K("ready");
            } catch (e) {
                throw new v.A(e);
            }
        }, [G, Z, D, er, $, L, O, J]),
        eo = a.useCallback(async () => {
            s()(null != Z, "Cannot submit soundboard sound with no guildId"), q(!0), H(null);
            try {
                ei
                    ? await (0, C.xV)({ guildId: Z, soundId: i.soundId, name: D, volume: L, emojiId: O, emojiName: J })
                    : (await eu(), (0, m.P0)((0, f.o)(M.intl.string(M.t.T7dhBL), h.Ck.SUCCESS))),
                    P();
            } catch (e) {
                el(e);
            } finally {
                K("ready"), q(!1), R(1), z(1);
            }
        }, [ei, P, Z, i, D, L, O, J, eu, z]);
    (0, j.Ay)(() => {
        B(null), A.default.track(S.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: Z });
    }),
        a.useEffect(() => {
            R(Math.min(L, V));
        }, [L, R, V]);
    let ed = (0, n.jsx)(p.A, {
            guildId: Z,
            emojiId: O,
            emojiName: J,
            setEmojiId: _,
            setEmojiName: U,
            error: X?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        ec = a.useMemo(
            () => [
                { variant: "secondary", text: M.intl.string(M.t.Khpixd), onClick: P, disabled: Y },
                {
                    text: ei ? M.intl.string(M.t.bZY171) : M.intl.string(M.t.RGJbYB),
                    onClick: eo,
                    variant: "primary",
                    disabled: !es,
                    loading: Y,
                },
            ],
            [eo, es, Y, ei, P],
        );
    return (0, n.jsx)(r.Modal, {
        onClose: P,
        transitionState: T,
        title: ei ? M.intl.string(M.t.HmsZGS) : M.intl.string(M.t["ioD/9I"]),
        actions: ec,
        children: (0, n.jsxs)(u.n, {
            children: [
                null != X && !X.hasFieldErrors() && (0, n.jsx)(o.w, { type: "critical", children: X.message }),
                I ? (0, n.jsx)(E.A, { label: M.intl.string(M.t.UYt7iQ), value: Z, onChange: ee }) : null,
                (ei || null != G) && (0, n.jsx)(b.A, { sound: i, volume: L, disabled: ea, onChange: Q }),
                ei || null != l
                    ? null
                    : (0, n.jsx)(d.D, {
                          required: !0,
                          errorMessage: X?.getFirstFieldErrorMessage("sound"),
                          label: M.intl.string(M.t.sSHaG7),
                          children: (0, n.jsx)(N.A, {
                              filename: G?.name ?? "",
                              buttonText: M.intl.string(M.t.zpi3XG),
                              placeholder: M.intl.string(M.t["x+YUL9"]),
                              onFileSelect: et,
                              filters: k,
                          }),
                      }),
                (0, n.jsxs)(c.M, {
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            label: M.intl.string(M.t.NpJGaM),
                            placeholder: M.intl.string(M.t.NpJGaM),
                            error: X?.getFirstFieldErrorMessage("name"),
                            value: D,
                            onChange: F,
                            maxLength: 32,
                        }),
                        ed,
                    ],
                }),
                (0, n.jsx)(x.A, {
                    label: M.intl.string(M.t["3CJlb1"]),
                    errorMessage: X?.getFirstFieldErrorMessage("volume"),
                    helperText: null != en ? en : void 0,
                    initialValue: L,
                    onValueChange: (e) => R(e),
                    minValue: 0,
                    maxValue: V,
                }),
            ],
        }),
    });
}
