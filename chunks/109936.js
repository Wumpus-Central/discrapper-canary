n.d(t, { j: () => s, o: () => l });
var a = n(985018);
let r = new Map([
    ["abn_amro", "ABN AMRO"],
    ["asn_bank", "ASN Bank"],
    ["bunq", "Bunq"],
    ["ing ", "ING"],
    ["knab", "Knab"],
    ["n26", "N26"],
    ["nn", "Nationale-Nederlanden"],
    ["rabobank", "Rabobank"],
    ["revolut", "Revolut"],
    ["regiobank", "RegioBank"],
    ["sns_bank", "SNS Bank (De Volksbank)"],
    ["triodos_bank", "Triodos Bank"],
    ["van_lanschot", "Van Lanschot"],
    ["yoursafe", "Yoursafe"],
    ["handelsbanken", "Handelsbanken"],
]);
function l(e) {
    return void 0 !== e && r.has(e) ? r.get(e) : a.intl.string(a.t.jdPblk);
}
let i = new Map([
    ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
    ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
    ["bank_austria", "Bank Austria"],
    ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
    ["bankhaus_schelhammer_und_schattera_ag", "Bankhaus Schelhammer & Schattera AG"],
    ["bawag_psk_ag", "BAWAG P.S.K. AG"],
    ["bks_bank_ag", "BKS Bank AG"],
    ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
    ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
    ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
    ["dolomitenbank", "Dolomitenbank"],
    ["easybank_ag", "Easybank AG"],
    ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
    ["hypo_alpeadriabank_international_ag", "Hypo Alpe-Adria-Bank International AG"],
    ["hypo_noe_lb_fur_niederosterreich_u_wien", "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien"],
    ["hypo_oberosterreich_salzburg_steiermark", "HYPO Ober\xf6sterreich, Salzburg, Steiermark"],
    ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
    ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
    ["hypo_bank_burgenland_aktiengesellschaft", "HYPO-BANK BURGENLAND Aktiengesellschaft"],
    ["marchfelder_bank", "Marchfelder Bank"],
    ["oberbank_ag", "Oberbank AG"],
    ["raiffeisen_bankengruppe_osterreich", "Raiffeisen Bankengruppe \xd6sterreich"],
    ["schoellerbank_ag", "Schoellerbank AG"],
    ["sparda_bank_wien", "Sparda-Bank Wien"],
    ["volksbank_gruppe", "Volksbank Gruppe"],
    ["volkskreditbank_ag", "Volkskreditbank AG"],
    ["vr_bank_braunau", "VR-Bank Braunau"],
]);
function s(e) {
    return void 0 !== e && i.has(e) ? i.get(e) : a.intl.string(a.t.jdPblk);
}
