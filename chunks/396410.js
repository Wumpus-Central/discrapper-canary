l.d(t, { default: () => h }), l(474991), l(398202), l(301563), l(47120);
var s = l(200651),
    n = l(192379),
    i = l(990547),
    o = l(481060),
    r = l(479531),
    a = l(213609),
    u = l(388032),
    c = l(675833);
let d = RegExp('(^[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&\'*+/=?^_`{}|~0-9A-Z]+)*|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$', 'i');
function h(e) {
    let { transitionState: t, onFormSubmit: l, onSuccess: h, onClose: x, headerText: p, confirmButtonText: k, confirmButtonColor: m, impressionName: f } = e,
        [j, g] = n.useState(!1),
        [z, A] = n.useState(''),
        [C, _] = n.useState(null),
        N = n.useRef(null);
    (0, a.Z)({
        type: i.ImpressionTypes.MODAL,
        name: f
    });
    let Z = async (e) => {
        if ((e.preventDefault(), _(null), g(!0), !1 === d.test(z))) {
            _(u.NW.string(u.t.hML7Gx)), g(!1);
            return;
        }
        try {
            let e = null != l ? await l(z) : void 0;
            null != h &&
                (null != e
                    ? h({
                          response: e,
                          email: z
                      })
                    : h(z)),
                x();
        } catch (e) {
            _(new r.Z(e).getAnyErrorMessage());
        } finally {
            g(!1);
        }
    };
    return (0, s.jsx)(o.Y0X, {
        transitionState: t,
        children: (0, s.jsxs)('form', {
            onSubmit: Z,
            children: [
                (0, s.jsxs)(o.xBx, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, s.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: p
                        }),
                        (0, s.jsx)(o.olH, {
                            onClick: x,
                            className: c.modalCloseButton
                        })
                    ]
                }),
                (0, s.jsx)(o.hzk, {
                    children: (0, s.jsx)(o.xJW, {
                        title: u.NW.string(u.t.hvOfmJ),
                        error: C,
                        children: (0, s.jsx)(o.oil, {
                            value: z,
                            onChange: A,
                            inputRef: N
                        })
                    })
                }),
                (0, s.jsxs)(o.mzw, {
                    children: [
                        (0, s.jsx)(o.zxk, {
                            type: 'submit',
                            color: null != m ? m : o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: k
                        }),
                        (0, s.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: x,
                            children: u.NW.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
