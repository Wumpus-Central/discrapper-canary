l.d(t, { default: () => y });
var n = l(627968),
    a = l(64700),
    i = l(284009),
    s = l.n(i),
    r = l(158954),
    u = l(397927),
    o = l(181658),
    d = l(964486),
    c = l(78213),
    m = l(643374),
    f = l(954571),
    h = l(796774),
    g = l(461123),
    x = l(236972),
    v = l(352024),
    j = l(698154);
l(980504);
var p = l(652215),
    N = l(985018);
let b = [{ name: "audio", extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"] }];
function y(e) {
    let { guildId: t, sourceFile: l, existingSound: i, onClose: y, transitionState: C, showGuildPicker: A = !1 } = e,
        [w, S] = a.useState(l?.name ?? i?.name ?? ""),
        [M, E] = a.useState(i?.volume ?? 1),
        [T, k] = a.useState(i?.emojiId),
        [P, D] = a.useState(i?.emojiName),
        { file: I, loadAudioFromFile: O, maxVolume: F, setMaxVolume: L } = (0, x.L)(),
        [R, U] = a.useState(!1),
        [_, J] = a.useState(null),
        [$, G] = a.useState(null),
        [V, z] = a.useState("ready"),
        [B, Y] = a.useState(t);
    async function q(e) {
        try {
            await O(e ?? null), z("ready"), J(null);
        } catch (e) {
            H(e);
        }
    }
    function H(e) {
        if (e instanceof o.A) J(e);
        else if (e instanceof Error) {
            let t = { status: 500, body: { message: e.message } };
            J(new o.A(t));
        } else J(new o.A(e));
    }
    a.useEffect(() => {
        l?.file != null && e(l.file);
        async function e(e) {
            try {
                await O(e), z("ready"), J(null);
            } catch (e) {
                H(e);
            }
        }
    }, [l?.file, O]);
    let W = (function (e) {
            switch (e) {
                case "encoding":
                    return N.intl.string(N.t["4IMMdB"]);
                case "encoding-failed":
                    return N.intl.string(N.t.Ka29xq);
                case "uploading":
                    return N.intl.string(N.t.ndr58Q);
            }
            return null;
        })(V),
        X = "uploading" === V || "encoding" === V,
        K = null != i,
        Q =
            w.length >= 2 &&
            (K || null != I) &&
            null != B &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1e3;
                return t > 0 && t <= 5;
            })($),
        Z = a.useCallback(async (e, t) => {
            z("encoding");
            try {
                let l = await (0, v.Yo)(e, t);
                return z("ready"), l;
            } catch (e) {
                throw (z("encoding-failed"), e);
            }
        }, []),
        ee = a.useCallback(async () => {
            if (null == I) return;
            s()(null != B, "Cannot submit soundboard sound with no guildId");
            let e = I;
            if (null != $) {
                let t = await Z(I, $);
                if (null == t) return;
                e = t;
            }
            let t = (0, v.YK)(e);
            z("uploading");
            try {
                await (0, v.JX)({ readPromise: t, guildId: B, name: w, volume: M, emojiId: T, emojiName: P }),
                    z("ready");
            } catch (e) {
                throw new o.A(e);
            }
        }, [I, B, w, Z, $, M, T, P]),
        et = a.useCallback(async () => {
            s()(null != B, "Cannot submit soundboard sound with no guildId"), U(!0), J(null);
            try {
                K
                    ? await (0, h.xV)({ guildId: B, soundId: i.soundId, name: w, volume: M, emojiId: T, emojiName: P })
                    : (await ee(),
                      (0, u.showToast)((0, u.createToast)(N.intl.string(N.t.T7dhBL), u.ToastType.SUCCESS))),
                    y();
            } catch (e) {
                H(e);
            } finally {
                z("ready"), U(!1), E(1), L(1);
            }
        }, [K, y, B, i, w, M, T, P, ee, L]);
    (0, d.Ay)(() => {
        O(null), f.default.track(p.HAw.OPEN_MODAL, { type: "Soundboard Upload Sound", guild_id: B });
    }),
        a.useEffect(() => {
            E(Math.min(M, F));
        }, [M, E, F]);
    let el = (0, n.jsx)(c.A, {
            guildId: B,
            emojiId: T,
            emojiName: P,
            setEmojiId: k,
            setEmojiName: D,
            error: _?.getFirstFieldErrorMessage("emoji"),
            isRequiredField: !1,
        }),
        en = a.useMemo(
            () => [
                { variant: "secondary", text: N.intl.string(N.t.Khpixd), onClick: y, disabled: R },
                {
                    text: K ? N.intl.string(N.t.bZY171) : N.intl.string(N.t.RGJbYB),
                    onClick: et,
                    variant: "primary",
                    disabled: !Q,
                    loading: R,
                },
            ],
            [et, Q, R, K, y],
        );
    return (0, n.jsx)(r.Modal, {
        onClose: y,
        transitionState: C,
        title: K ? N.intl.string(N.t.HmsZGS) : N.intl.string(N.t["ioD/9I"]),
        actions: en,
        children: (0, n.jsxs)(r.nVY, {
            children: [
                null != _ && !_.hasFieldErrors() && (0, n.jsx)(r.wx6, { type: "critical", children: _.message }),
                A ? (0, n.jsx)(j.A, { label: N.intl.string(N.t.UYt7iQ), value: B, onChange: Y }) : null,
                (K || null != I) && (0, n.jsx)(g.A, { sound: i, volume: M, disabled: X, onChange: G }),
                K || null != l
                    ? null
                    : (0, n.jsx)(r.D0$, {
                          required: !0,
                          errorMessage: _?.getFirstFieldErrorMessage("sound"),
                          label: N.intl.string(N.t.sSHaG7),
                          children: (0, n.jsx)(m.A, {
                              filename: I?.name ?? "",
                              buttonText: N.intl.string(N.t.zpi3XG),
                              placeholder: N.intl.string(N.t["x+YUL9"]),
                              onFileSelect: q,
                              filters: b,
                          }),
                      }),
                (0, n.jsxs)(r.M_l, {
                    children: [
                        (0, n.jsx)(u.ksK, {
                            required: !0,
                            label: N.intl.string(N.t.NpJGaM),
                            placeholder: N.intl.string(N.t.NpJGaM),
                            error: _?.getFirstFieldErrorMessage("name"),
                            value: w,
                            onChange: S,
                            maxLength: 32,
                        }),
                        el,
                    ],
                }),
                (0, n.jsx)(u.Apm, {
                    label: N.intl.string(N.t["3CJlb1"]),
                    errorMessage: _?.getFirstFieldErrorMessage("volume"),
                    helperText: null != W ? W : void 0,
                    initialValue: M,
                    onValueChange: (e) => E(e),
                    minValue: 0,
                    maxValue: F,
                }),
            ],
        }),
    });
}
