(n.d(t, { default: () => S }), n(388685), n(415506));
var l = n(255367),
    a = n(73800),
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
    let { guildId: S, sourceFile: O, existingSound: E, onClose: P, transitionState: Z, showGuildPicker: M = !1 } = e,
        [k, I] = a.useState(null != (n = null != (t = null == O ? void 0 : O.name) ? t : null == E ? void 0 : E.name) ? n : ''),
        [T, D] = a.useState(null != (i = null == E ? void 0 : E.volume) ? i : 1),
        [R, _] = a.useState(null == E ? void 0 : E.emojiId),
        [F, z] = a.useState(null == E ? void 0 : E.emojiName),
        { file: A, loadAudioFromFile: B, maxVolume: U, setMaxVolume: L } = (0, y.p)(),
        [G, H] = a.useState(!1),
        [W, q] = a.useState(null),
        [V, Y] = a.useState(null),
        [J, X] = a.useState('ready'),
        [K, Q] = a.useState(S);
    async function $(e) {
        try {
            (await B(null != e ? e : null), X('ready'), q(null));
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
                (await B(e), X('ready'), q(null));
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
        el = null != E,
        ea =
            k.length >= 2 &&
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
                return (X('ready'), n);
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
                (await (0, b.bb)({
                    readPromise: t,
                    guildId: K,
                    name: k,
                    volume: T,
                    emojiId: R,
                    emojiName: F
                }),
                    X('ready'));
            } catch (e) {
                throw new c.Z(e);
            }
        }, [A, K, k, ei, V, T, R, F]),
        es = a.useCallback(async () => {
            (o()(null != K, 'Cannot submit soundboard sound with no guildId'), H(!0), q(null));
            try {
                (el
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: E.soundId,
                          name: k,
                          volume: T,
                          emojiId: R,
                          emojiName: F
                      })
                    : (await er(), (0, u.showToast)((0, u.createToast)(w.intl.string(w.t.T7dhBA), u.ToastType.SUCCESS))),
                    P());
            } catch (e) {
                ee(e);
            } finally {
                (X('ready'), H(!1), D(1), L(1));
            }
        }, [el, P, K, E, k, T, R, F, er, L]);
    ((0, d.ZP)(() => {
        (B(null),
            h.default.track(j.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            }));
    }),
        a.useEffect(() => {
            D(Math.min(T, U));
        }, [T, D, U]));
    let eo = (0, l.jsx)(f.Z, {
        guildId: K,
        emojiId: R,
        emojiName: F,
        setEmojiId: _,
        setEmojiName: z,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, l.jsxs)(u.Y0X, {
        transitionState: Z,
        parentComponent: 'SoundboardSoundUploadModal',
        children: [
            (0, l.jsx)(u.olH, {
                onClick: P,
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
                children: [
                    null != W &&
                        !W.hasFieldErrors() &&
                        (0, l.jsx)(u.kzN, {
                            className: N.section,
                            children: W.message
                        }),
                    M
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
                            sound: E,
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
                                    value: k,
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
                            onValueChange: (e) => D(e),
                            minValue: 0,
                            maxValue: U
                        })
                    })
                ]
            }),
            (0, l.jsxs)(u.mzw, {
                children: [
                    (0, l.jsxs)(u.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, l.jsx)(u.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: el ? w.intl.string(w.t['bZY17+']) : w.intl.string(w.t.RGJbYG),
                                disabled: !ea,
                                loading: G,
                                onClick: es
                            }),
                            (0, l.jsx)(u.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: w.intl.string(w.t.Khpixc),
                                disabled: G,
                                onClick: P
                            })
                        ]
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
