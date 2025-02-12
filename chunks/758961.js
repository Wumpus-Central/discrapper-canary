t.d(n, { default: () => S }), t(47120), t(411104);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    r = t(512722),
    u = t.n(r),
    o = t(481060),
    d = t(479531),
    c = t(493773),
    f = t(349709),
    m = t(763610),
    h = t(626135),
    g = t(208049),
    p = t(671895),
    x = t(586826),
    v = t(812613),
    y = t(203437),
    b = t(710111),
    N = t(981631),
    j = t(388032),
    w = t(373016);
let C = [
    {
        name: 'audio',
        extensions: ['mp3', 'wav', 'ogg', 'opus', 'x-wav', 'mp4']
    }
];
function S(e) {
    var n, t, i, r;
    let { guildId: S, sourceFile: Z, existingSound: M, onClose: k, transitionState: E, showGuildPicker: I = !1 } = e,
        [P, _] = a.useState(null !== (t = null !== (n = null == Z ? void 0 : Z.name) && void 0 !== n ? n : null == M ? void 0 : M.name) && void 0 !== t ? t : ''),
        [R, T] = a.useState(null !== (i = null == M ? void 0 : M.volume) && void 0 !== i ? i : 1),
        [F, D] = a.useState(null == M ? void 0 : M.emojiId),
        [z, O] = a.useState(null == M ? void 0 : M.emojiName),
        { file: A, loadAudioFromFile: L, maxVolume: B, setMaxVolume: U } = (0, x.p)(),
        [G, H] = a.useState(!1),
        [W, q] = a.useState(null),
        [V, Y] = a.useState(null),
        [J, X] = a.useState('ready'),
        [K, Q] = a.useState(S);
    async function $(e) {
        try {
            await L(null != e ? e : null), X('ready'), q(null);
        } catch (e) {
            ee(e);
        }
    }
    function ee(e) {
        if (e instanceof d.Z) q(e);
        else if (e instanceof Error) {
            let n = {
                status: 500,
                body: { message: e.message }
            };
            q(new d.Z(n));
        } else q(new d.Z(e));
    }
    a.useEffect(() => {
        (null == Z ? void 0 : Z.file) != null &&
            !(async function (e) {
                try {
                    await L(e), X('ready'), q(null);
                } catch (e) {
                    ee(e);
                }
            })(Z.file);
    }, [null == Z ? void 0 : Z.file, L]);
    let en = (function (e) {
            switch (e) {
                case 'encoding':
                    return j.intl.string(j.t['4IMMdH']);
                case 'encoding-failed':
                    return j.intl.string(j.t.Ka29xs);
                case 'uploading':
                    return j.intl.string(j.t.ndr58f);
            }
            return null;
        })(J),
        et = 'uploading' === J || 'encoding' === J,
        el = null != M,
        ea =
            P.length >= 2 &&
            (el || null != A) &&
            null != K &&
            (function (e) {
                if (null == e) return !0;
                let n = (e.endMs - e.startMs) / 1000;
                return n > 0 && n <= b.YW;
            })(V),
        ei = a.useCallback(async (e, n) => {
            X('encoding');
            try {
                let t = await (0, v.kV)(e, n);
                return X('ready'), t;
            } catch (e) {
                throw (X('encoding-failed'), e);
            }
        }, []),
        es = a.useCallback(async () => {
            if (null == A) return;
            u()(null != K, 'Cannot submit soundboard sound with no guildId');
            let e = A;
            if (null != V) {
                let n = await ei(A, V);
                if (null == n) return;
                e = n;
            }
            let n = (0, v.Zk)(e);
            X('uploading');
            try {
                await (0, v.bb)({
                    readPromise: n,
                    guildId: K,
                    name: P,
                    volume: R,
                    emojiId: F,
                    emojiName: z
                }),
                    X('ready');
            } catch (e) {
                throw new d.Z(e);
            }
        }, [A, K, P, ei, V, R, F, z]),
        er = a.useCallback(async () => {
            u()(null != K, 'Cannot submit soundboard sound with no guildId'), H(!0), q(null);
            try {
                el
                    ? await (0, g.$d)({
                          guildId: K,
                          soundId: M.soundId,
                          name: P,
                          volume: R,
                          emojiId: F,
                          emojiName: z
                      })
                    : await es(),
                    k();
            } catch (e) {
                ee(e);
            } finally {
                X('ready'), H(!1), T(1), U(1);
            }
        }, [el, k, K, M, P, R, F, z, es, U]);
    (0, c.ZP)(() => {
        L(null),
            h.default.track(N.rMx.OPEN_MODAL, {
                type: 'Soundboard Upload Sound',
                guild_id: K
            });
    }),
        a.useEffect(() => {
            T(Math.min(R, B));
        }, [R, T, B]);
    let eu = (0, l.jsx)(f.Z, {
        guildId: K,
        emojiId: F,
        emojiName: z,
        setEmojiId: D,
        setEmojiName: O,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage('emoji'),
        isRequiredField: !1
    });
    return (0, l.jsxs)(o.Y0X, {
        transitionState: E,
        children: [
            (0, l.jsx)(o.olH, {
                onClick: k,
                className: w.modalClose
            }),
            (0, l.jsx)(o.xBx, {
                className: w.headerContainer,
                separator: !1,
                children: (0, l.jsx)(o.X6q, {
                    className: w.header,
                    variant: 'heading-xl/extrabold',
                    children: el ? j.intl.string(j.t.HmsZGR) : j.intl.string(j.t['ioD/9P'])
                })
            }),
            (0, l.jsxs)(o.hzk, {
                className: w.__invalid_content,
                children: [
                    null != W &&
                        !W.hasFieldErrors() &&
                        (0, l.jsx)(o.kzN, {
                            className: w.section,
                            children: W.message
                        }),
                    I
                        ? (0, l.jsx)(o.xJW, {
                              required: !0,
                              className: w.section,
                              title: j.intl.string(j.t.UYt7iY),
                              children: (0, l.jsx)(y.Z, {
                                  value: K,
                                  onChange: Q
                              })
                          })
                        : null,
                    (el || null != A) &&
                        (0, l.jsx)(p.Z, {
                            sound: M,
                            volume: R,
                            disabled: et,
                            onChange: Y
                        }),
                    el || null != Z
                        ? null
                        : (0, l.jsx)(o.xJW, {
                              required: !0,
                              error: null == W ? void 0 : W.getFirstFieldErrorMessage('sound'),
                              className: w.section,
                              title: j.intl.string(j.t.sSHaGx),
                              children: (0, l.jsx)(m.Z, {
                                  filename: null !== (r = null == A ? void 0 : A.name) && void 0 !== r ? r : '',
                                  buttonText: j.intl.string(j.t.zpi3XF),
                                  placeholder: j.intl.string(j.t['x+YULy']),
                                  onFileSelect: $,
                                  filters: C
                              })
                          }),
                    (0, l.jsxs)('div', {
                        className: w.multiInput,
                        children: [
                            (0, l.jsx)(o.xJW, {
                                required: !0,
                                error: null == W ? void 0 : W.getFirstFieldErrorMessage('name'),
                                className: s()(w.section, w.halfInput),
                                title: j.intl.string(j.t.NpJGaG),
                                children: (0, l.jsx)(o.oil, {
                                    placeholder: j.intl.string(j.t.NpJGaG),
                                    value: P,
                                    onChange: _,
                                    maxLength: b.Ek
                                })
                            }),
                            eu
                        ]
                    }),
                    (0, l.jsx)(o.xJW, {
                        error: null == W ? void 0 : W.getFirstFieldErrorMessage('volume'),
                        className: w.section,
                        title: j.intl.string(j.t['3CJlb2']),
                        children: (0, l.jsx)(o.iRW, {
                            initialValue: R,
                            onValueChange: (e) => T(e),
                            minValue: 0,
                            maxValue: B
                        })
                    })
                ]
            }),
            (0, l.jsxs)(o.mzw, {
                children: [
                    (0, l.jsx)(o.zxk, {
                        disabled: !ea,
                        submitting: G,
                        size: o.zxk.Sizes.SMALL,
                        onClick: er,
                        children: el ? j.intl.string(j.t['bZY17+']) : j.intl.string(j.t.RGJbYG)
                    }),
                    (0, l.jsx)(o.zxk, {
                        disabled: G,
                        onClick: k,
                        size: o.zxk.Sizes.SMALL,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        children: j.intl.string(j.t.Khpixc)
                    }),
                    null != en &&
                        (0, l.jsx)('div', {
                            className: w.soundStateHint,
                            children: (0, l.jsx)(o.Text, {
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
