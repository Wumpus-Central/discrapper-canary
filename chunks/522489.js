n.d(t, { m: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_repeat_gift_purchase',
    label: 'Repeat Gift Purchase',
    defaultConfig: {
        enabled: !1,
        redirectToPlanSelectStep: !1,
        removeGiftRecipientUI: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Redirect to review step',
            config: {
                enabled: !0,
                redirectToPlanSelectStep: !1,
                removeGiftRecipientUI: !1
            }
        },
        {
            id: 2,
            label: 'Redirect to review step + remove gift recipient UI',
            config: {
                enabled: !0,
                redirectToPlanSelectStep: !1,
                removeGiftRecipientUI: !0
            }
        },
        {
            id: 3,
            label: 'Redirect to customize step',
            config: {
                enabled: !0,
                redirectToPlanSelectStep: !0,
                removeGiftRecipientUI: !1
            }
        },
        {
            id: 4,
            label: 'Redirect to customize step + remove gift recipient UI',
            config: {
                enabled: !0,
                redirectToPlanSelectStep: !0,
                removeGiftRecipientUI: !0
            }
        }
    ]
});
