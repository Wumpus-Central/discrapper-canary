"use strict";
n.d(t, { F: () => r });
var i = n(859387);
function r(e) {
    var t, n;
    return {
        id: e.id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: (0, i.dv)(e.hero_image),
        heroVideo: (0, i.dv)(e.hero_video),
        sponsorImage: (0, i.dv)(e.sponsor_image),
        cta: {
            url: (t = e.cta).url,
            buttonLabel: t.button_label,
            android: null != t.android ? { androidAppId: t.android.android_app_id } : void 0,
            ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
        },
        questIds: e.quest_ids,
        questHomeEntrypoint:
            null != e.quest_home_entrypoint
                ? {
                      linearGradient: (n = e.quest_home_entrypoint).linear_gradient,
                      radialGradient: n.radial_gradient,
                      image: (0, i.dv)(n.image),
                      tooltipImage: (0, i.dv)(n.tooltip_image),
                      tooltipTitle: n.tooltip_title,
                      tooltipSubtitle: n.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, i.dv)(e.shelf_image),
        shelfVideo: (0, i.dv)(e.shelf_video),
    };
}
