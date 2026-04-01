"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(905228),
    s = n(790225),
    a = n(346640);
class o extends r.A {
    actions = {
        GORILLA_COMPLETE_ACTIVITY_SUCCESS: (e) => this.handleActivityComplete(e),
        GORILLA_SET_VOLUME: () => this.handleSetVolume(),
        GORILLA_UPDATE_USER_DATA_SUCCESS: (e) => this.handleUpdateUserDataSuccess(e),
    };
    handleActivityComplete(e) {
        let { activity: t, userData: n, changes: r } = e;
        if (t === a.$p.CRAFTING) {
            (0, s.PT)(i.R.TWENTY_THREE, 1);
            let e = n.craftingClass;
            e === a.xO.MAGIC_CRAFTER
                ? (0, s.PT)(i.R.SEVENTEEN, 1)
                : e === a.xO.ARMOR_CRAFTER
                  ? (0, s.PT)(i.R.EIGHTEEN, 1)
                  : e === a.xO.WEAPON_CRAFTER && (0, s.PT)(i.R.NINETEEN, 1);
        } else if (t === a.$p.COMBAT) {
            (0, s.PT)(i.R.TWENTY_TWO, 1);
            let e = n.combatClass;
            e === a.$6.DPS
                ? (0, s.PT)(i.R.FOURTEEN, 1)
                : e === a.$6.TANK
                  ? (0, s.PT)(i.R.FIFTEEN, 1)
                  : e === a.$6.HEALER && (0, s.PT)(i.R.SIXTEEN, 1);
        } else
            t === a.$p.GATHERING &&
                (r.leather > 0 && (0, s.PT)(i.R.TWENTY_FOUR, r.leather),
                r.wood > 0 && (0, s.PT)(i.R.TWENTY_FIVE, r.wood),
                r.metal > 0 && (0, s.PT)(i.R.TWENTY_SIX, r.metal));
    }
    handleSetVolume() {
        (0, s.__)(i.R.NINE);
    }
    handleUpdateUserDataSuccess(e) {
        let { userData: t } = e;
        null != t.combatClass && (0, s.__)(i.R.TEN), null != t.craftingClass && (0, s.__)(i.R.ELEVEN);
    }
}
let l = new o();
