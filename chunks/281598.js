n.d(t, {
    Eo: () => c,
    Fr: () => i,
    Kj: () => o,
    Kr: () => f,
    RF: () => l,
    XA: () => u,
    ZK: () => d
}),
    n(653041),
    n(47120),
    n(86693),
    n(536091);
var r = n(481060),
    i = (function (e) {
        return (e.HERO_BANNER_STATIC = 'hero_banner'), (e.HERO_BANNER_ANIMATED = 'hero_banner_animated'), (e.HERO_LOGO = 'hero_logo'), (e.FEATURED_BLOCK = 'featured_block'), (e.CATEGORY_BANNER_STATIC = 'category_banner'), (e.CATEGORY_BANNER_ANIMATED = 'category_banner_animated'), (e.UPSELL_BANNER = 'upsell_banner'), (e.UPSELL_BANNER_POPOUT = 'upsell_popout'), (e.PDP_BACKGROUND = 'pdp_bg'), (e.PDP_LOGO = 'pdp_logo'), (e.COLLECTED_MODAL_BG = 'collected_modal_bg'), (e.SHOP_BUTTON_BG_HOVER = 'shop_button_bg_hover'), (e.SHOP_BUTTON_BG_HOVER_DARK = 'shop_button_bg_hover_dark'), (e.SHOP_BUTTON_BG_HOVER_LIGHT = 'shop_button_bg_hover_light'), (e.SHOP_BUTTON_BG_RESTING = 'shop_button_bg_resting'), (e.SHOP_BUTTON_BG_RESTING_DARK = 'shop_button_bg_resting_dark'), (e.SHOP_BUTTON_BG_RESTING_LIGHT = 'shop_button_bg_resting_light'), (e.COACHTIP_AVATAR = 'coachtip_avatar'), e;
    })({});
let o = {
        'hero_banner.jpg': 'hero_banner',
        'hero_banner_animated.webm': 'hero_banner_animated',
        'hero_logo.png': 'hero_logo',
        'featured_block.png': 'featured_block',
        'category_banner.jpg': 'category_banner',
        'category_banner_animated.webm': 'category_banner_animated',
        'upsell_banner.jpg': 'upsell_banner',
        'upsell_banner_popout.png': 'upsell_popout',
        'pdp_bg.jpg': 'pdp_bg',
        'pdp_logo.png': 'pdp_logo',
        'collected_modal_bg.jpg': 'collected_modal_bg',
        'shop_button_bg_hover.png': 'shop_button_bg_hover',
        'shop_button_bg_hover_dark.png': 'shop_button_bg_hover_dark',
        'shop_button_bg_hover_light.png': 'shop_button_bg_hover_light',
        'shop_button_bg_resting.png': 'shop_button_bg_resting',
        'shop_button_bg_resting_dark.png': 'shop_button_bg_resting_dark',
        'shop_button_bg_resting_light.png': 'shop_button_bg_resting_light',
        'coachtip_avatar.png': 'coachtip_avatar'
    },
    a = '.DS_Store',
    s = async (e) => {
        let t = [];
        if (e.isFile) {
            let n = e,
                r = await new Promise((e) => n.file(e));
            r.name !== a && t.push(r);
        } else if (e.isDirectory) {
            let n = e.createReader(),
                r = await new Promise((e) => n.readEntries(e)),
                i = await Promise.all(r.map((e) => s(e)));
            t.push(...i.flat());
        }
        return t;
    },
    l = async (e) => {
        let t = e.map((e) => s(e));
        return (await Promise.all(t)).flat();
    },
    c = (e) => {
        (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
    },
    u = (e) => {
        (0, r.showToast)((0, r.createToast)(e, r.ToastType.SUCCESS));
    },
    d = (e, t, n) => {
        let r = new FileReader();
        (r.onload = (r) => {
            if (null == r.target || 'string' != typeof r.target.result) {
                null == n || n('Error uploading file. Try again!');
                return;
            }
            t(e, r.target.result);
        }),
            r.readAsDataURL(e);
    },
    f = (e, t, n) => {
        if (0 === e.length) {
            null == n || n('No files found!');
            return;
        }
        for (let r of e) d(r, t, n);
    };
