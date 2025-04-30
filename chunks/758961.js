n.d(t, { default: () => S }), n(388685), n(415506);
var l = n(200651),
    a = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(512722),
    o = n.n(s),
    u = n(481060),
    c = n(479531),
    d = n(493773),
    f = n(349709),
    m = n(763610),
    h = n(626135),
    g = n(208049),
    p = n(671895),
    y = n(586826),
    b = n(812613),
    v = n(203437),
    x = n(710111),
    j = n(981631),
    w = n(388032),
    N = n(414213);
let C = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function S(e) {
    var t, n, i, s;
    let { guildId: S, sourceFile: O, existingSound: P, onClose: E, transitionState: k, showGuildPicker: Z = !1 } = e,
        [M, I] = a.useState(null != (n = null != (t = null == O ? void 0 : O.name) ? t : null == P ? void 0 : P.name) ? n : ''),
        [T, _] = a.useState(null != (i = null == P ? void 0 : P.volume) ? i : 1),
        [D, R] = a.useState(null == P ? void 0 : P.emojiId),
        [F, z] = a.useState(null == P ? void 0 : P.emojiName),
        { file: A, loadAudioFromFile: B, maxVolume: L, setMaxVolume: U } = (0, y.p)(),
        [G, H] = a.useState(!1),
        [W, q] = a.useState(null),
        [V, Y] = a.useState(null),
        [J, X] = a.useState('ready'),
        [K, Q] = a.useState(S);
    async function $(e) {
        try {
            await B(null != e ? e : null), X('ready'), q(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
        if (e instanceof c.Z) q(e);
        else if (e instanceof Error) {
            let t = {
                status: 500,
                body: { message: e.message }
            };
            q(new c.Z(t));
        } else q(new c.Z(e));
    }
    a.useEffect(() => {
        (null == O ? void 0 : O.file) != null && e(O.file);
        async function e(e) {
            try {
                await B(e), X('ready'), q(null);
            } catch (e) {
                ee(e);
            }
        }
    }, [null == O ? void 0 : O.file, B]);
    let et = (function (e) {
            switch (e) {
                case 'encoding':
                    return w.intl.string(w.t['4IMMdH']);
                case 'encoding-failed':
                    return w.intl.string(w.t.Ka29xs);
                case 'uploading':
                    return w.intl.string(w.t.ndr58f);
            }
            return null;
        })(J),
        en = 'uploading' === J || 'encoding' === J,
        el = null != P,
        ea =
            M.length >= 2 &&
            (el || null != A) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1000;
                return t > 0 && t <= x.YW;
            })(V),
        ei = a.useCallback(async (e, t) => {
            X('encoding');
            try {
                let n = await (0, b.kV)(e, t);
                return X('ready'), n;
            } catch (e) {
                throw (X('encoding-failed'), e);
            }
        }, []),
        er = a.useCallback(async () => {
            if (null == A) return;
            o()(null != K, 'Cannot submit soundboard sound with no guildId');
            let e = A;
            if (null != V) {
                let t = await ei(A, V);
                if (null == t) return;
                e = t;
            }
            let t = (0, b.Zk)(e);
            X('uploading');
            try {
                await (0, b.bb)({
                    readPromise: t,
                    guildId: K,
                    name: M,
                    volume: T,
                    emojiId: D,
                    emojiName: F
                }),
                    X('ready');
            } catch (e) {
                throw new c.Z(e);
            }
        }, [A, K, M, ei, V, T, D, F]),
        es = a.useCallback(async () => {
            o()(null != K, 'Cannot submit soundboard sound with no guildId'), H(!0), q(null);
            try {
                el
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: P.soundId,
                          name: M,
                          volume: T,
                          emojiId: D,
                          emojiName: F
                      })
                    : (await er(), (0, u.showToast)((0, u.createToast)(w.intl.string(w.t.T7dhBA), u.ToastType.SUCCESS))),
                    E();
            } catch (e) {
                ee(e);
            } finally {
                X('ready'), H(!1), _(1), U(1);
            }
        }, [el, E, K, P, M, T, D, F, er, U]);
    (0, d.ZP)(() => {
        B(null),
            h.default.track(j.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            });
    }),
        a.useEffect(() => {
            _(Math.min(T, L));
        }, [T, _, L]);
    let eo = (0, l.jsx)(f.Z, {
        guildId: K,
        emojiId: D,
        emojiName: F,
        setEmojiId: R,
        setEmojiName: z,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, l.jsxs)(u.Y0X, {
        transitionState: k,
        children: [
            (0, l.jsx)(u.olH, {
                onClick: E,
                className: N.modalClose
            }),
            (0, l.jsx)(u.xBx, {
                className: N.headerContainer,
                separator: !1,
                children: (0, l.jsx)(u.X6q, {
                    className: N.header,
                    variant: 'heading-xl/extrabold',
                    children: el ? w.intl.string(w.t.HmsZGR) : w.intl.string(w.t['ioD/9P'])
                })
            }),
            (0, l.jsxs)(u.hzk, {
                className: N.__invalid_content,
                children: [
                    null != W &&
                        !W.hasFieldErrors() &&
                        (0, l.jsx)(u.kzN, {
                            className: N.section,
                            children: W.message
                        }),
                    Z
                        ? (0, l.jsx)(u.xJW, {
                              required: !0,
                              className: N.section,
                              title: w.intl.string(w.t.UYt7iY),
                              children: (0, l.jsx)(v.Z, {
                                  value: K,
                                  onChange: Q
                              })
                          })
                        : null,
                    (el || null != A) &&
                        (0, l.jsx)(p.Z, {
                            sound: P,
                            volume: T,
                            disabled: en,
                            onChange: Y
                        }),
                    el || null != O
                        ? null
                        : (0, l.jsx)(u.xJW, {
                              required: !0,
                              error: null == W ? void 0 : W.getFirstFieldErrorMessage('sound'),
                              className: N.section,
                              title: w.intl.string(w.t.sSHaGx),
                              children: (0, l.jsx)(m.Z, {
                                  filename: null != (s = null == A ? void 0 : A.name) ? s : '',
                                  buttonText: w.intl.string(w.t.zpi3XF),
                                  placeholder: w.intl.string(w.t['x+YULy']),
                                  onFileSelect: $,
                                  filters: C
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: N.multiInput,
                        children: [
                            (0, l.jsx)(u.xJW, {
                                required: !0,
                                error: null == W ? void 0 : W.getFirstFieldErrorMessage('name'),
                                className: r()(N.section, N.halfInput),
                                title: w.intl.string(w.t.NpJGaG),
                                children: (0, l.jsx)(u.oil, {
                                    placeholder: w.intl.string(w.t.NpJGaG),
                                    value: M,
                                    onChange: I,
                                    maxLength: x.Ek
                                })
                            }),
                            eo
                        ]
                    }),
                    (0, l.jsx)(u.xJW, {
                        error: null == W ? void 0 : W.getFirstFieldErrorMessage('volume'),
                        className: N.section,
                        title: w.intl.string(w.t['3CJlb2']),
                        children: (0, l.jsx)(u.iRW, {
                            initialValue: T,
                            onValueChange: (e) => _(e),
                            minValue: 0,
                            maxValue: L
                        })
                    })
                ]
            }),
            (0, l.jsxs)(u.mzw, {
                children: [
                    (0, l.jsx)(u.zxk, {
                        disabled: !ea,
                        submitting: G,
                        size: u.zxk.Sizes.SMALL,
                        onClick: es,
                        children: el ? w.intl.string(w.t['bZY17+']) : w.intl.string(w.t.RGJbYG)
                    }),
                    (0, l.jsx)(u.zxk, {
                        disabled: G,
                        onClick: E,
                        size: u.zxk.Sizes.SMALL,
                        look: u.zxk.Looks.LINK,
                        color: u.zxk.Colors.PRIMARY,
                        children: w.intl.string(w.t.Khpixc)
                    }),
                    null != et &&
                        (0, l.jsx)('div', {
                            className: N.soundStateHint,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: et
                            })
                        })
                ]
            })
        ]
    });
}
