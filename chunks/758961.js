(n.d(t, { default: () => O }), n(388685), n(415506));
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    s = n(512722),
    o = n.n(s),
    u = n(82659),
    c = n(481060),
    d = n(479531),
    f = n(493773),
    m = n(349709),
    h = n(763610),
    g = n(626135),
    p = n(208049),
    y = n(671895),
    b = n(586826),
    v = n(812613),
    x = n(203437),
    j = n(710111),
    w = n(981631),
    N = n(388032),
    C = n(414213);
let S = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function O(e) {
    var t, n, i, s;
    let { guildId: O, sourceFile: E, existingSound: P, onClose: Z, transitionState: M, showGuildPicker: k = !1 } = e,
        [I, T] = a.useState(null != (n = null != (t = null == E ? void 0 : E.name) ? t : null == P ? void 0 : P.name) ? n : ''),
        [D, R] = a.useState(null != (i = null == P ? void 0 : P.volume) ? i : 1),
        [_, F] = a.useState(null == P ? void 0 : P.emojiId),
        [A, B] = a.useState(null == P ? void 0 : P.emojiName),
        { file: U, loadAudioFromFile: z, maxVolume: L, setMaxVolume: G } = (0, b.p)(),
        [H, W] = a.useState(!1),
        [q, V] = a.useState(null),
        [J, Y] = a.useState(null),
        [K, X] = a.useState('ready'),
        [Q, $] = a.useState(O);
    async function ee(e) {
        try {
            (await z(null != e ? e : null), X('ready'), V(null));
        } catch (e) {
            et(e);
        }
    }
    function et(e) {
        if (e instanceof d.Z) V(e);
        else if (e instanceof Error) {
            let t = {
                status: 500,
                body: { message: e.message }
            };
            V(new d.Z(t));
        } else V(new d.Z(e));
    }
    a.useEffect(() => {
        (null == E ? void 0 : E.file) != null && e(E.file);
        async function e(e) {
            try {
                (await z(e), X('ready'), V(null));
            } catch (e) {
                et(e);
            }
        }
    }, [null == E ? void 0 : E.file, z]);
    let en = (function (e) {
            switch (e) {
                case 'encoding':
                    return N.intl.string(N.t['4IMMdH']);
                case 'encoding-failed':
                    return N.intl.string(N.t.Ka29xs);
                case 'uploading':
                    return N.intl.string(N.t.ndr58f);
            }
            return null;
        })(K),
        el = 'uploading' === K || 'encoding' === K,
        ea = null != P,
        ei =
            I.length >= 2 &&
            (ea || null != U) &&
            null != Q &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1000;
                return t > 0 && t <= j.YW;
            })(J),
        er = a.useCallback(async (e, t) => {
            X('encoding');
            try {
                let n = await (0, v.kV)(e, t);
                return (X('ready'), n);
            } catch (e) {
                throw (X('encoding-failed'), e);
            }
        }, []),
        es = a.useCallback(async () => {
            if (null == U) return;
            o()(null != Q, 'Cannot submit soundboard sound with no guildId');
            let e = U;
            if (null != J) {
                let t = await er(U, J);
                if (null == t) return;
                e = t;
            }
            let t = (0, v.Zk)(e);
            X('uploading');
            try {
                (await (0, v.bb)({
                    readPromise: t,
                    guildId: Q,
                    name: I,
                    volume: D,
                    emojiId: _,
                    emojiName: A
                }),
                    X('ready'));
            } catch (e) {
                throw new d.Z(e);
            }
        }, [U, Q, I, er, J, D, _, A]),
        eo = a.useCallback(async () => {
            (o()(null != Q, 'Cannot submit soundboard sound with no guildId'), W(!0), V(null));
            try {
                (ea
                    ? await (0, p.$d)({
                          guildId: Q,
                          soundId: P.soundId,
                          name: I,
                          volume: D,
                          emojiId: _,
                          emojiName: A
                      })
                    : (await es(), (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.T7dhBA), c.ToastType.SUCCESS))),
                    Z());
            } catch (e) {
                et(e);
            } finally {
                (X('ready'), W(!1), R(1), G(1));
            }
        }, [ea, Z, Q, P, I, D, _, A, es, G]);
    ((0, f.ZP)(() => {
        (z(null),
            g.default.track(w.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: Q
            }));
    }),
        a.useEffect(() => {
            R(Math.min(D, L));
        }, [D, R, L]));
    let eu = (0, l.jsx)(m.Z, {
            guildId: Q,
            emojiId: _,
            emojiName: A,
            setEmojiId: F,
            setEmojiName: B,
            error: null == q ? void 0 : q.getFirstFieldErrorMessage('emoji'),
            isRequiredField: !1
        }),
        ec = a.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: N.intl.string(N.t.Khpixc),
                    onClick: Z,
                    disabled: H
                },
                {
                    text: ea ? N.intl.string(N.t['bZY17+']) : N.intl.string(N.t.RGJbYG),
                    onClick: eo,
                    variant: 'primary',
                    disabled: !ei,
                    loading: H
                }
            ],
            [eo, ei, H, ea, Z]
        );
    return (0, l.jsxs)(u.u, {
        onClose: Z,
        transitionState: M,
        title: ea ? N.intl.string(N.t.HmsZGR) : N.intl.string(N.t['ioD/9P']),
        actions: ec,
        children: [
            null != q &&
                !q.hasFieldErrors() &&
                (0, l.jsx)(c.kzN, {
                    className: C.section,
                    children: q.message
                }),
            k
                ? (0, l.jsx)(c.xJW, {
                      required: !0,
                      className: C.section,
                      title: N.intl.string(N.t.UYt7iY),
                      children: (0, l.jsx)(x.Z, {
                          value: Q,
                          onChange: $
                      })
                  })
                : null,
            (ea || null != U) &&
                (0, l.jsx)(y.Z, {
                    sound: P,
                    volume: D,
                    disabled: el,
                    onChange: Y
                }),
            ea || null != E
                ? null
                : (0, l.jsx)(c.xJW, {
                      required: !0,
                      error: null == q ? void 0 : q.getFirstFieldErrorMessage('sound'),
                      className: C.section,
                      title: N.intl.string(N.t.sSHaGx),
                      children: (0, l.jsx)(h.Z, {
                          filename: null != (s = null == U ? void 0 : U.name) ? s : '',
                          buttonText: N.intl.string(N.t.zpi3XF),
                          placeholder: N.intl.string(N.t['x+YULy']),
                          onFileSelect: ee,
                          filters: S
                      })
                  }),
            (0, l.jsxs)('div', {
                className: C.multiInput,
                children: [
                    (0, l.jsx)(c.xJW, {
                        required: !0,
                        error: null == q ? void 0 : q.getFirstFieldErrorMessage('name'),
                        className: r()(C.section, C.halfInput),
                        title: N.intl.string(N.t.NpJGaG),
                        children: (0, l.jsx)(c.oil, {
                            placeholder: N.intl.string(N.t.NpJGaG),
                            value: I,
                            onChange: T,
                            maxLength: j.Ek
                        })
                    }),
                    eu
                ]
            }),
            (0, l.jsx)(c.xJW, {
                error: null == q ? void 0 : q.getFirstFieldErrorMessage('volume'),
                className: C.section,
                title: N.intl.string(N.t['3CJlb2']),
                children: (0, l.jsx)(c.iRW, {
                    initialValue: D,
                    onValueChange: (e) => R(e),
                    minValue: 0,
                    maxValue: L
                })
            }),
            null != en &&
                (0, l.jsx)('div', {
                    className: C.soundStateHint,
                    children: (0, l.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: en
                    })
                })
        ]
    });
}
