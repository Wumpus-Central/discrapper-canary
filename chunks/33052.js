r.d(n, {
    K: function () {
        return h;
    }
});
var i = r(200651),
    a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(607070),
    c = r(987209),
    d = r(286961),
    f = r(897942),
    _ = r(870705);
function h() {
    var e;
    let n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { claimableRewards: r } = (0, c.wD)(),
        a = null === (e = (0, d.Z)()) || void 0 === e ? void 0 : e.planSelection;
    return null == a || null == r || 0 === r.length
        ? null
        : (0, i.jsxs)('div', {
              className: _.promotionalGiftMessage,
              children: [
                  (0, i.jsxs)('div', {
                      className: _.promotionalTextSection,
                      children: [
                          (0, i.jsx)(l.Text, {
                              className: _.promotionalGiftMessageText,
                              variant: 'text-sm/bold',
                              children: a.heading()
                          }),
                          null != a.subheading &&
                              r.length > 1 &&
                              (0, i.jsx)(l.Text, {
                                  className: _.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: a.subheading(r.length)
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: s()({
                          [_.promotionalAvatarMaxRewards]: r.length > 2,
                          [_.promotionalAvatarTwoRewards]: 2 === r.length,
                          [_.promotionalAvatarSingleReward]: 1 === r.length
                      }),
                      children: (0, i.jsx)(f.Z, {
                          maxRewardImageSrc: a.getImageUrl(!0, n),
                          claimableRewards: r,
                          size: l.AvatarSizes.SIZE_56
                      })
                  })
              ]
          });
}
