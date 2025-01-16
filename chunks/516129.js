n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(44315),
    d = n(208567),
    u = n(981631),
    m = n(351079);
let h = u.Ilk.PRIMARY_400,
    g = u.Ilk.PRIMARY_500;
function x(e) {
    let { enabled: t, imageClassName: n, iconWrapperClassName: r, ...u } = e,
        x = (0, o.ZP)(),
        p = (0, s.wj)(x) ? h : g,
        f = {
            height: 18,
            width: 18,
            color: (0, c.Lq)(p)
        };
    return (0, i.jsx)(d.Z, {
        className: l()({
            [m.avatarUploader]: t,
            [m.avatarUploaderDisabled]: !t
        }),
        imageClassName: l()(n, m.avatarUploaderInnerSquare, { [m.avatarUploaderInnerSquareDisabled]: !t }),
        icon:
            null != u.image && '' !== u.image
                ? (0, i.jsx)(a.PencilIcon, {
                      size: 'custom',
                      ...f
                  })
                : (0, i.jsx)(a.ImagePlusIcon, {
                      size: 'custom',
                      ...f
                  }),
        iconClassName: l()(m.avatarUploadIcon, m.hideDefaultIcon),
        iconWrapperClassName: r,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...u
    });
}
