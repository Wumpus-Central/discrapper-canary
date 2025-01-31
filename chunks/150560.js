n.d(t, { Z: () => r });
let i = (0, n(15729).U)((e) => ({
        utmSourceCurrent: void 0,
        utmMediumCurrent: void 0,
        utmCampaignCurrent: void 0,
        utmContentCurrent: void 0,
        setUtmCurrentContext: (t) => {
            let { utmSourceCurrent: n, utmMediumCurrent: i, utmCampaignCurrent: r, utmContentCurrent: a } = t;
            return e({
                utmSourceCurrent: n,
                utmMediumCurrent: i,
                utmCampaignCurrent: r,
                utmContentCurrent: a
            });
        },
        getUtmCurrentContext: () => i.getState()
    })),
    r = i;
