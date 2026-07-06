n.d(t, { S: () => r });
var l = n(624210),
    i = n(26279);
async function r(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === i.Re.DRAFT)
        try {
            await (0, l.Nl)(n.id);
        } catch (e) {}
}
