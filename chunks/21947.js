"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(845255),
    s = n(905228),
    a = n(790225),
    o = n(346640);
class l extends r.A {
    actions = {
        GORILLA_COMPLETE_ACTIVITY_SUCCESS: (e) => this.handleActivityComplete(e),
        GORILLA_SET_VOLUME: () => this.handleSetVolume(),
        GORILLA_UPDATE_USER_DATA_SUCCESS: (e) => this.handleUpdateUserDataSuccess(e),
        GORILLA_UPDATE_ACHIEVEMENT: () => this.handleUpdateAchievement(),
    };
    handleActivityComplete(e) {
        let { activity: t, userData: n, changes: r } = e;
        if (t === o.$p.CRAFTING) {
            let e =
                (n.stats.professionCompletion.magic_crafter ?? 0) +
                (n.stats.professionCompletion.armor_crafter ?? 0) +
                (n.stats.professionCompletion.weapon_crafter ?? 0);
            (0, a.PT)(s.R.TWENTY_THREE, e, { additive: !1 });
            let t = n.craftingClass;
            t === o.xO.MAGIC_CRAFTER
                ? (0, a.PT)(s.R.SEVENTEEN, n.stats.professionCompletion.magic_crafter ?? 0, { additive: !1 })
                : t === o.xO.ARMOR_CRAFTER
                  ? (0, a.PT)(s.R.EIGHTEEN, n.stats.professionCompletion.armor_crafter ?? 0, { additive: !1 })
                  : t === o.xO.WEAPON_CRAFTER &&
                    (0, a.PT)(s.R.NINETEEN, n.stats.professionCompletion.weapon_crafter ?? 0, { additive: !1 });
        } else if (t === o.$p.COMBAT) {
            let e =
                (n.stats.professionCompletion.dps ?? 0) +
                (n.stats.professionCompletion.tank ?? 0) +
                (n.stats.professionCompletion.healer ?? 0);
            (0, a.PT)(s.R.TWENTY_TWO, e, { additive: !1 });
            let t = n.combatClass;
            t === o.$6.DPS
                ? (0, a.PT)(s.R.FOURTEEN, n.stats.professionCompletion.dps ?? 0, { additive: !1 })
                : t === o.$6.TANK
                  ? (0, a.PT)(s.R.FIFTEEN, n.stats.professionCompletion.tank ?? 0, { additive: !1 })
                  : t === o.$6.HEALER &&
                    (0, a.PT)(s.R.SIXTEEN, n.stats.professionCompletion.healer ?? 0, { additive: !1 });
        } else
            t === o.$p.GATHERING &&
                (r.leather > 0 &&
                    (0, a.PT)(s.R.TWENTY_FOUR, n.stats.resourceContribution.leather ?? 0, { additive: !1 }),
                r.wood > 0 && (0, a.PT)(s.R.TWENTY_FIVE, n.stats.resourceContribution.wood ?? 0, { additive: !1 }),
                r.metal > 0 && (0, a.PT)(s.R.TWENTY_SIX, n.stats.resourceContribution.metal ?? 0, { additive: !1 }));
    }
    handleSetVolume() {
        (0, a.__)(s.R.NINE);
    }
    handleUpdateUserDataSuccess(e) {
        let { userData: t } = e;
        null != t.combatClass && (0, a.__)(s.R.TEN), null != t.craftingClass && (0, a.__)(s.R.ELEVEN);
    }
    handleUpdateAchievement() {
        let e = i.A.getAchievements(),
            t = Object.values(e).reduce((e, t) => {
                if (t.id === s.R.TWELVE) return e;
                let n = o.l8[t.id],
                    r = (0, a.Ou)(n, t);
                return (null != r && r > 0) || t.unlocked ? e + 1 : e;
            }, 0),
            n = e[s.R.TWELVE];
        (null == n || "progress" !== n.type || n.total !== t) && (0, a.PT)(s.R.TWELVE, t, { additive: !1 });
    }
}
let u = new l();
