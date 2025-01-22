let i = (0, r(15729).U)((e) => ({
    utmSourceCurrent: void 0,
    utmMediumCurrent: void 0,
    utmCampaignCurrent: void 0,
    utmContentCurrent: void 0,
    setUtmCurrentContext: (n) => {
        let { utmSourceCurrent: r, utmMediumCurrent: i, utmCampaignCurrent: a, utmContentCurrent: o } = n;
        return e({
            utmSourceCurrent: r,
            utmMediumCurrent: i,
            utmCampaignCurrent: a,
            utmContentCurrent: o
        });
    },
    getUtmCurrentContext: () => i.getState()
}));
n.Z = i;
