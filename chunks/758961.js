t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    }),
    t(47120),
    t(411104);
var l,
    a,
    i = t(200651),
    r = t(192379),
    s = t(120356),
    o = t.n(s),
    u = t(512722),
    c = t.n(u),
    d = t(481060),
    f = t(479531),
    m = t(493773),
    h = t(349709),
    g = t(763610),
    p = t(626135),
    v = t(208049),
    x = t(671895),
    N = t(586826),
    y = t(812613),
    b = t(203437),
    j = t(710111),
    C = t(981631),
    w = t(388032),
    S = t(226833);
((a = l || (l = {})).READY = 'ready'), (a.ENCODING_FAILED = 'encoding-failed'), (a.ENCODING = 'encoding'), (a.UPLOADING = 'uploading');
let I = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function E(e) {
    var n, t, l, a;
    let { guildId: s, sourceFile: u, existingSound: E, onClose: M, transitionState: Z, showGuildPicker: T = !1 } = e,
        [_, k] = r.useState(null !== (t = null !== (n = null == u ? void 0 : u.name) && void 0 !== n ? n : null == E ? void 0 : E.name) && void 0 !== t ? t : ''),
        [P, R] = r.useState(null !== (l = null == E ? void 0 : E.volume) && void 0 !== l ? l : 1),
        [F, O] = r.useState(null == E ? void 0 : E.emojiId),
        [D, A] = r.useState(null == E ? void 0 : E.emojiName),
        { file: B, loadAudioFromFile: L, maxVolume: U, setMaxVolume: G } = (0, N.p)(),
        [z, H] = r.useState(!1),
        [V, Y] = r.useState(null),
        [q, W] = r.useState(null),
        [J, K] = r.useState('ready'),
        [X, Q] = r.useState(s);
    async function $(e) {
        try {
            await L(null != e ? e : null), K('ready'), Y(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
        if (e instanceof f.Z) Y(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message }
            };
            Y(new f.Z(n));
        } else Y(new f.Z(e));
    }
    r.useEffect(() => {
        if ((null == u ? void 0 : u.file) != null)
            (async function e(e) {
                try {
                    await L(e), K('ready'), Y(null);
                } catch (e) {
                    ee(e);
                }
            })(u.file);
    }, [null == u ? void 0 : u.file, L]);
    let en = (function (e) {
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
        et = 'uploading' === J || 'encoding' === J,
        el = null != E,
        ea =
            _.length >= 2 &&
            (el || null != B) &&
            null != X &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= j.YW;
            })(q),
        ei = r.useCallback(async (e, n) => {
            K('encoding');
            try {
                let t = await (0, y.kV)(e, n);
                return K('ready'), t;
            } catch (e) {
                throw (K('encoding-failed'), e);
            }
        }, []),
        er = r.useCallback(async () => {
            if (null == B) return;
            c()(null != X, 'Cannot submit soundboard sound with no guildId');
            let e = B;
            if (null != q) {
                let n = await ei(B, q);
                if (null == n) return;
                e = n;
            }
            let n = (0, y.Zk)(e);
            K('uploading');
            try {
                await (0, y.bb)({
                    readPromise: n,
                    guildId: X,
                    name: _,
                    volume: P,
                    emojiId: F,
                    emojiName: D
                }),
                    K('ready');
            } catch (e) {
                throw new f.Z(e);
            }
        }, [B, X, _, ei, q, P, F, D]),
        es = r.useCallback(async () => {
            c()(null != X, 'Cannot submit soundboard sound with no guildId'), H(!0), Y(null);
            try {
                el
                    ? await (0, v.$d)({
                          guildId: X,
                          soundId: E.soundId,
                          name: _,
                          volume: P,
                          emojiId: F,
                          emojiName: D
                      })
                    : await er(),
                    M();
            } catch (e) {
                ee(e);
            } finally {
                K('ready'), H(!1), R(1), G(1);
            }
        }, [el, M, X, E, _, P, F, D, er, G]);
    (0, m.Z)(() => {
        L(null),
            p.default.track(C.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: X
            });
    }),
        r.useEffect(() => {
            R(Math.min(P, U));
        }, [P, R, U]);
    let eo = (0, i.jsx)(h.Z, {
        guildId: X,
        emojiId: F,
        emojiName: D,
        setEmojiId: O,
        setEmojiName: A,
        error: null == V ? void 0 : V.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, i.jsxs)(d.ModalRoot, {
        transitionState: Z,
        children: [
            (0, i.jsx)(d.ModalCloseButton, {
                onClick: M,
                className: S.modalClose
            }),
            (0, i.jsx)(d.ModalHeader, {
                className: S.headerContainer,
                separator: !1,
                children: (0, i.jsx)(d.Heading, {
                    className: S.header,
                    variant: 'heading-xl/extrabold',
                    children: el ? w.intl.string(w.t.HmsZGR) : w.intl.string(w.t['ioD/9P'])
                })
            }),
            (0, i.jsxs)(d.ModalContent, {
                className: S.__invalid_content,
                children: [
                    null != V &&
                        !V.hasFieldErrors() &&
                        (0, i.jsx)(d.FormErrorBlock, {
                            className: S.section,
                            children: V.message
                        }),
                    T
                        ? (0, i.jsx)(d.FormItem, {
                              required: !0,
                              className: S.section,
                              title: w.intl.string(w.t.UYt7iY),
                              children: (0, i.jsx)(b.Z, {
                                  value: X,
                                  onChange: Q
                              })
                          })
                        : null,
                    (el || null != B) &&
                        (0, i.jsx)(x.Z, {
                            sound: E,
                            volume: P,
                            disabled: et,
                            onChange: W
                        }),
                    el || null != u
                        ? null
                        : (0, i.jsx)(d.FormItem, {
                              required: !0,
                              error: null == V ? void 0 : V.getFirstFieldErrorMessage('sound'),
                              className: S.section,
                              title: w.intl.string(w.t.sSHaGx),
                              children: (0, i.jsx)(g.Z, {
                                  filename: null !== (a = null == B ? void 0 : B.name) && void 0 !== a ? a : '',
                                  buttonText: w.intl.string(w.t.zpi3XF),
                                  placeholder: w.intl.string(w.t['x+YULy']),
                                  onFileSelect: $,
                                  filters: I
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: S.multiInput,
                        children: [
                            (0, i.jsx)(d.FormItem, {
                                required: !0,
                                error: null == V ? void 0 : V.getFirstFieldErrorMessage('name'),
                                className: o()(S.section, S.halfInput),
                                title: w.intl.string(w.t.NpJGaG),
                                children: (0, i.jsx)(d.TextInput, {
                                    placeholder: w.intl.string(w.t.NpJGaG),
                                    value: _,
                                    onChange: k,
                                    maxLength: j.Ek
                                })
                            }),
                            eo
                        ]
                    }),
                    (0, i.jsx)(d.FormItem, {
                        error: null == V ? void 0 : V.getFirstFieldErrorMessage('volume'),
                        className: S.section,
                        title: w.intl.string(w.t['3CJlb2']),
                        children: (0, i.jsx)(d.Slider, {
                            initialValue: P,
                            onValueChange: (e) => R(e),
                            minValue: 0,
                            maxValue: U
                        })
                    })
                ]
            }),
            (0, i.jsxs)(d.ModalFooter, {
                children: [
                    (0, i.jsx)(d.Button, {
                        disabled: !ea,
                        submitting: z,
                        size: d.Button.Sizes.SMALL,
                        onClick: es,
                        children: el ? w.intl.string(w.t['bZY17+']) : w.intl.string(w.t.RGJbYG)
                    }),
                    (0, i.jsx)(d.Button, {
                        disabled: z,
                        onClick: M,
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.LINK,
                        color: d.Button.Colors.PRIMARY,
                        children: w.intl.string(w.t.Khpixc)
                    }),
                    null != en &&
                        (0, i.jsx)('div', {
                            className: S.soundStateHint,
                            children: (0, i.jsx)(d.Text, {
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
