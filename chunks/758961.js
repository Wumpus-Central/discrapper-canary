n.d(t, { default: () => S }), n(388685), n(415506);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
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
    b = n(586826),
    y = n(812613),
    v = n(203437),
    x = n(710111),
    j = n(981631),
    N = n(388032),
    w = n(414213);
let C = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function S(e) {
    var t, n, r, s;
    let { guildId: S, sourceFile: O, existingSound: P, onClose: E, transitionState: k, showGuildPicker: Z = !1 } = e,
        [M, I] = a.useState(null != (n = null != (t = null == O ? void 0 : O.name) ? t : null == P ? void 0 : P.name) ? n : ''),
        [_, D] = a.useState(null != (r = null == P ? void 0 : P.volume) ? r : 1),
        [R, T] = a.useState(null == P ? void 0 : P.emojiId),
        [F, W] = a.useState(null == P ? void 0 : P.emojiName),
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
                await A(e), X('ready'), q(null);
            } catch (e) {
                ee(e);
            }
        }
    }, [null == O ? void 0 : O.file, A]);
    let et = (function (e) {
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
        en = 'uploading' === J || 'encoding' === J,
        el = null != P,
        ea =
            M.length >= 2 &&
            (el || null != z) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let t = (e.endMs - e.startMs) / 1000;
                return t > 0 && t <= x.YW;
            })(V),
        er = a.useCallback(async (e, t) => {
            X('encoding');
            try {
                let n = await (0, y.kV)(e, t);
                return X('ready'), n;
            } catch (e) {
                throw (X('encoding-failed'), e);
            }
        }, []),
        ei = a.useCallback(async () => {
            if (null == z) return;
            o()(null != K, 'Cannot submit soundboard sound with no guildId');
            let e = z;
            if (null != V) {
                let t = await er(z, V);
                if (null == t) return;
                e = t;
            }
            let t = (0, y.Zk)(e);
            X('uploading');
            try {
                await (0, y.bb)({
                    readPromise: t,
                    guildId: K,
                    name: M,
                    volume: _,
                    emojiId: R,
                    emojiName: F
                }),
                    X('ready');
            } catch (e) {
                throw new c.Z(e);
            }
        }, [z, K, M, er, V, _, R, F]),
        es = a.useCallback(async () => {
            o()(null != K, 'Cannot submit soundboard sound with no guildId'), G(!0), q(null);
            try {
                el
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: P.soundId,
                          name: M,
                          volume: _,
                          emojiId: R,
                          emojiName: F
                      })
                    : await ei(),
                    E();
            } catch (e) {
                ee(e);
            } finally {
                X('ready'), G(!1), D(1), B(1);
            }
        }, [el, E, K, P, M, _, R, F, ei, B]);
    (0, d.ZP)(() => {
        A(null),
            h.default.track(j.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            });
    }),
        a.useEffect(() => {
            D(Math.min(_, L));
        }, [_, D, L]);
    let eo = (0, l.jsx)(f.Z, {
        guildId: K,
        emojiId: R,
        emojiName: F,
        setEmojiId: T,
        setEmojiName: W,
        error: null == H ? void 0 : H.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, l.jsxs)(u.Y0X, {
        transitionState: k,
        children: [
            (0, l.jsx)(u.olH, {
                onClick: E,
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
                    Z
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
                            disabled: en,
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
                                    value: M,
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
                            onValueChange: (e) => D(e),
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
                        onClick: E,
                        size: u.zxk.Sizes.SMALL,
                        look: u.zxk.Looks.LINK,
                        color: u.zxk.Colors.PRIMARY,
                        children: N.NW.string(N.t.Khpixc)
                    }),
                    null != et &&
                        (0, l.jsx)('div', {
                            className: w.soundStateHint,
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
