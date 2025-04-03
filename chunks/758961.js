t.d(n, { default: () => S }), t(47120), t(411104);
var l = t(200651),
    a = t(192379),
    r = t(120356),
    i = t.n(r),
    s = t(512722),
    o = t.n(s),
    u = t(481060),
    c = t(479531),
    d = t(493773),
    f = t(349709),
    m = t(763610),
    h = t(626135),
    g = t(208049),
    p = t(671895),
    b = t(586826),
    y = t(812613),
    v = t(203437),
    x = t(710111),
    j = t(981631),
    N = t(388032),
    w = t(414213);
let C = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function S(e) {
    var n, t, r, s;
    let { guildId: S, sourceFile: O, existingSound: P, onClose: k, transitionState: Z, showGuildPicker: M = !1 } = e,
        [E, I] = a.useState(null != (t = null != (n = null == O ? void 0 : O.name) ? n : null == P ? void 0 : P.name) ? t : ''),
        [_, R] = a.useState(null != (r = null == P ? void 0 : P.volume) ? r : 1),
        [T, D] = a.useState(null == P ? void 0 : P.emojiId),
        [W, F] = a.useState(null == P ? void 0 : P.emojiName),
        { file: z, loadAudioFromFile: A, maxVolume: L, setMaxVolume: B } = (0, b.p)(),
        [U, G] = a.useState(!1),
        [H, q] = a.useState(null),
        [V, Y] = a.useState(null),
        [J, X] = a.useState('ready'),
        [K, Q] = a.useState(S);
    async function $(e) {
        try {
            await A(null != e ? e : null), X('ready'), q(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
        if (e instanceof c.Z) q(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message }
            };
            q(new c.Z(n));
        } else q(new c.Z(e));
    }
    a.useEffect(() => {
        (null == O ? void 0 : O.file) != null && e(O.file);
        async function e(e) {
            try {
                await A(e), X('ready'), q(null);
            } catch (e) {
                ee(e);
            }
        }
    }, [null == O ? void 0 : O.file, A]);
    let en = (function (e) {
            switch (e) {
                case 'encoding':
                    return N.NW.string(N.t['4IMMdH']);
                case 'encoding-failed':
                    return N.NW.string(N.t.Ka29xs);
                case 'uploading':
                    return N.NW.string(N.t.ndr58f);
            }
            return null;
        })(J),
        et = 'uploading' === J || 'encoding' === J,
        el = null != P,
        ea =
            E.length >= 2 &&
            (el || null != z) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= x.YW;
            })(V),
        er = a.useCallback(async (e, n) => {
            X('encoding');
            try {
                let t = await (0, y.kV)(e, n);
                return X('ready'), t;
            } catch (e) {
                throw (X('encoding-failed'), e);
            }
        }, []),
        ei = a.useCallback(async () => {
            if (null == z) return;
            o()(null != K, 'Cannot submit soundboard sound with no guildId');
            let e = z;
            if (null != V) {
                let n = await er(z, V);
                if (null == n) return;
                e = n;
            }
            let n = (0, y.Zk)(e);
            X('uploading');
            try {
                await (0, y.bb)({
                    readPromise: n,
                    guildId: K,
                    name: E,
                    volume: _,
                    emojiId: T,
                    emojiName: W
                }),
                    X('ready');
            } catch (e) {
                throw new c.Z(e);
            }
        }, [z, K, E, er, V, _, T, W]),
        es = a.useCallback(async () => {
            o()(null != K, 'Cannot submit soundboard sound with no guildId'), G(!0), q(null);
            try {
                el
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: P.soundId,
                          name: E,
                          volume: _,
                          emojiId: T,
                          emojiName: W
                      })
                    : await ei(),
                    k();
            } catch (e) {
                ee(e);
            } finally {
                X('ready'), G(!1), R(1), B(1);
            }
        }, [el, k, K, P, E, _, T, W, ei, B]);
    (0, d.ZP)(() => {
        A(null),
            h.default.track(j.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            });
    }),
        a.useEffect(() => {
            R(Math.min(_, L));
        }, [_, R, L]);
    let eo = (0, l.jsx)(f.Z, {
        guildId: K,
        emojiId: T,
        emojiName: W,
        setEmojiId: D,
        setEmojiName: F,
        error: null == H ? void 0 : H.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, l.jsxs)(u.Y0X, {
        transitionState: Z,
        children: [
            (0, l.jsx)(u.olH, {
                onClick: k,
                className: w.modalClose
            }),
            (0, l.jsx)(u.xBx, {
                className: w.headerContainer,
                separator: !1,
                children: (0, l.jsx)(u.X6q, {
                    className: w.header,
                    variant: 'heading-xl/extrabold',
                    children: el ? N.NW.string(N.t.HmsZGR) : N.NW.string(N.t['ioD/9P'])
                })
            }),
            (0, l.jsxs)(u.hzk, {
                className: w.__invalid_content,
                children: [
                    null != H &&
                        !H.hasFieldErrors() &&
                        (0, l.jsx)(u.kzN, {
                            className: w.section,
                            children: H.message
                        }),
                    M
                        ? (0, l.jsx)(u.xJW, {
                              required: !0,
                              className: w.section,
                              title: N.NW.string(N.t.UYt7iY),
                              children: (0, l.jsx)(v.Z, {
                                  value: K,
                                  onChange: Q
                              })
                          })
                        : null,
                    (el || null != z) &&
                        (0, l.jsx)(p.Z, {
                            sound: P,
                            volume: _,
                            disabled: et,
                            onChange: Y
                        }),
                    el || null != O
                        ? null
                        : (0, l.jsx)(u.xJW, {
                              required: !0,
                              error: null == H ? void 0 : H.getFirstFieldErrorMessage('sound'),
                              className: w.section,
                              title: N.NW.string(N.t.sSHaGx),
                              children: (0, l.jsx)(m.Z, {
                                  filename: null != (s = null == z ? void 0 : z.name) ? s : '',
                                  buttonText: N.NW.string(N.t.zpi3XF),
                                  placeholder: N.NW.string(N.t['x+YULy']),
                                  onFileSelect: $,
                                  filters: C
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: w.multiInput,
                        children: [
                            (0, l.jsx)(u.xJW, {
                                required: !0,
                                error: null == H ? void 0 : H.getFirstFieldErrorMessage('name'),
                                className: i()(w.section, w.halfInput),
                                title: N.NW.string(N.t.NpJGaG),
                                children: (0, l.jsx)(u.oil, {
                                    placeholder: N.NW.string(N.t.NpJGaG),
                                    value: E,
                                    onChange: I,
                                    maxLength: x.Ek
                                })
                            }),
                            eo
                        ]
                    }),
                    (0, l.jsx)(u.xJW, {
                        error: null == H ? void 0 : H.getFirstFieldErrorMessage('volume'),
                        className: w.section,
                        title: N.NW.string(N.t['3CJlb2']),
                        children: (0, l.jsx)(u.iRW, {
                            initialValue: _,
                            onValueChange: (e) => R(e),
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
                        submitting: U,
                        size: u.zxk.Sizes.SMALL,
                        onClick: es,
                        children: el ? N.NW.string(N.t['bZY17+']) : N.NW.string(N.t.RGJbYG)
                    }),
                    (0, l.jsx)(u.zxk, {
                        disabled: U,
                        onClick: k,
                        size: u.zxk.Sizes.SMALL,
                        look: u.zxk.Looks.LINK,
                        color: u.zxk.Colors.PRIMARY,
                        children: N.NW.string(N.t.Khpixc)
                    }),
                    null != en &&
                        (0, l.jsx)('div', {
                            className: w.soundStateHint,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: en
                            })
                        })
                ]
            })
        ]
    });
}
